import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import {
  TaxReturn,
  TaxReturnInput,
  TaxReturnUpdateInput,
} from './entities/return.model';
import { Revenue } from './entities/revenue.model';
import {
  Assets,
  Automobile,
  DomesticRealEstate,
} from './entities/assets.model';
import {
  DebtAndExpenses,
  OtherDebt,
  ResidentialPropertyInterestExpense,
} from './entities/debt.model';
import { WageIncome } from './entities/revenue.model';
import { VehicleAllowance } from './entities/revenue.model';
import { PensionPayment } from './entities/revenue.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ReturnsService {
  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
  ) {}

  async createTaxReturn(taxReturn: TaxReturnInput): Promise<TaxReturn> {
    //TODO: Fail if tax return already exists for given year
    const existingTaxReturn = await this.taxReturnModel.findOne({
      where: {
        year: taxReturn.year,
        userId: taxReturn.userId,
      },
    });

    if (existingTaxReturn) {
      throw new BadRequestException('Tax return already exists for given year');
    }

    const taxReturnInstance = await this.taxReturnModel.create(
      {
        ...taxReturn,
      },
      {
        include: [
          {
            model: Revenue,
            as: 'revenue',
            include: [
              {
                model: WageIncome,
                as: 'wageIncomes',
              },
              {
                model: VehicleAllowance,
                as: 'vehicleAllowances',
              },
              {
                model: PensionPayment,
                as: 'pensionPayments',
              },
            ],
          },
          {
            model: DebtAndExpenses,
            as: 'debtAndExpenses',
            include: [
              {
                model: ResidentialPropertyInterestExpense,
                as: 'residentialInterestExpenses',
              },
              {
                model: OtherDebt,
                as: 'otherDebts',
              },
            ],
          },
          {
            model: Assets,
            as: 'assets',
            include: [
              {
                model: DomesticRealEstate,
                as: 'domesticRealEstate',
              },
              {
                model: Automobile,
                as: 'automobiles',
              },
            ],
          },
        ],
      },
    );

    return taxReturnInstance;
  }

  async updateTaxReturn(taxReturnIn: TaxReturnUpdateInput): Promise<TaxReturn> {
    // start a transaction
    const transaction = await this.sequelize.transaction();
    try {
      const existing = await this.taxReturnModel.findOne({
        where: { id: taxReturnIn.id },
        include: [
          {
            model: Revenue,
            as: 'revenue',
            include: [
              { model: WageIncome, as: 'wageIncomes' },
              { model: VehicleAllowance, as: 'vehicleAllowances' },
              { model: PensionPayment, as: 'pensionPayments' },
            ],
          },
          {
            model: Assets,
            as: 'assets',
            include: [
              { model: DomesticRealEstate, as: 'domesticRealEstate' },
              { model: Automobile, as: 'automobiles' },
            ],
          },
          {
            model: DebtAndExpenses,
            as: 'debtAndExpenses',
            include: [
              {
                model: ResidentialPropertyInterestExpense,
                as: 'residentialInterestExpenses',
              },
              { model: OtherDebt, as: 'otherDebts' },
            ],
          },
        ],
        transaction,
      });

      if (!existing) {
        throw new NotFoundException(`TaxReturn ${taxReturnIn.id} not found`);
      }

      // 3) delete & recreate Revenue + its children
      if (taxReturnIn.revenue) {
        if (existing.revenue) {
          await WageIncome.destroy({
            where: { revenueId: existing.revenue.id },
            transaction,
          });
          await VehicleAllowance.destroy({
            where: { revenueId: existing.revenue.id },
            transaction,
          });
          await PensionPayment.destroy({
            where: { revenueId: existing.revenue.id },
            transaction,
          });
          await Revenue.destroy({
            where: { taxReturnId: taxReturnIn.id },
            transaction,
          });
        }

        await Revenue.create(
          { taxReturnId: taxReturnIn.id, ...taxReturnIn.revenue },
          {
            include: [
              { model: WageIncome, as: 'wageIncomes' },
              { model: VehicleAllowance, as: 'vehicleAllowances' },
              { model: PensionPayment, as: 'pensionPayments' },
            ],
            transaction,
          },
        );
      }

      // 4) delete & recreate Assets + its children
      if (taxReturnIn.assets) {
        if (existing.assets) {
          await DomesticRealEstate.destroy({
            where: { assetsId: existing.assets.id },
            transaction,
          });
          await Automobile.destroy({
            where: { assetsId: existing.assets.id },
            transaction,
          });
          await Assets.destroy({
            where: { taxReturnId: taxReturnIn.id },
            transaction,
          });
        }

        await Assets.create(
          { taxReturnId: taxReturnIn.id, ...taxReturnIn.assets },
          {
            include: [
              { model: DomesticRealEstate, as: 'domesticRealEstate' },
              { model: Automobile, as: 'automobiles' },
            ],
            transaction,
          },
        );
      }

      // 5) delete & recreate DebtAndExpenses + its children
      if (taxReturnIn.debtAndExpenses) {
        if (existing.debtAndExpenses) {
          await ResidentialPropertyInterestExpense.destroy({
            where: {
              debtAndExpensesId: existing.debtAndExpenses.id,
            },
            transaction,
          });
          await OtherDebt.destroy({
            where: {
              debtAndExpensesId: existing.debtAndExpenses.id,
            },
            transaction,
          });
          await DebtAndExpenses.destroy({
            where: { taxReturnId: taxReturnIn.id },
            transaction,
          });
        }

        await DebtAndExpenses.create(
          { taxReturnId: taxReturnIn.id, ...taxReturnIn.debtAndExpenses },
          {
            include: [
              {
                model: ResidentialPropertyInterestExpense,
                as: 'residentialInterestExpenses',
              },
              { model: OtherDebt, as: 'otherDebts' },
            ],
            transaction,
          },
        );
      }

      // 6) commit & return fresh
      await transaction.commit();
      return this.findOne(taxReturnIn.id);
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }

  async findOne(id: string) {
    const taxReturn = await this.taxReturnModel.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Revenue,
          include: [
            {
              model: WageIncome,
              as: 'wageIncomes',
            },
            {
              model: VehicleAllowance,
              as: 'vehicleAllowances',
            },
            {
              model: PensionPayment,
              as: 'pensionPayments',
            },
          ],
        },
        {
          model: Assets,
          include: [
            {
              model: DomesticRealEstate,
              as: 'domesticRealEstate',
            },
            {
              model: Automobile,
              as: 'automobiles',
            },
          ],
        },
        {
          model: DebtAndExpenses,
          include: [
            {
              model: ResidentialPropertyInterestExpense,
              as: 'residentialInterestExpenses',
            },
            {
              model: OtherDebt,
              as: 'otherDebts',
            },
          ],
        },
      ],
    });
    if (!taxReturn) {
      throw new NotFoundException(`TaxReturn ${id} not found`);
    }

    if (
      taxReturn.debtAndExpenses &&
      taxReturn.debtAndExpenses.residentialInterestExpenses &&
      taxReturn.debtAndExpenses.residentialInterestExpenses.length > 0
    ) {
      console.log(
        'DEBUG: First ResidentialPropertyInterestExpense data from Sequelize:',
      );
      console.log(
        JSON.stringify(
          taxReturn.debtAndExpenses.residentialInterestExpenses[0].toJSON(), // .toJSON() gives cleaner output for Sequelize models
          null,
          2,
        ),
      );
      console.log(
        'DEBUG: Value of totalPaymentsForYear for the first item:',
        taxReturn.debtAndExpenses.residentialInterestExpenses[0]
          .totalPaymentsForYea,
      );
    } else if (taxReturn.debtAndExpenses) {
      console.log(
        'DEBUG: debtAndExpenses exists, but residentialInterestExpenses is empty or null.',
      );
    } else {
      console.log('DEBUG: debtAndExpenses is null on the taxReturn object.');
    }
    return taxReturn;
  }

  async findAll(userId: string) {
    return this.taxReturnModel.findAll({
      where: {
        userId,
      },
    });
  }
}
