import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn, TaxReturnInput } from './entities/return.model';
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

@Injectable()
export class ReturnsService {
  constructor(
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

  async findOne(id: string) {
    return this.taxReturnModel.findOne({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return this.taxReturnModel.findAll();
  }
}
