import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Assets, AssetsInput } from './assets.model';
import { DebtAndExpenses, DebtAndExpensesInput } from './debt.model';
import { Revenue, RevenueInput } from './revenue.model';
import {
  Model,
  PrimaryKey,
  Default,
  DataType,
  Column,
  Table,
  HasOne,
  Unique,
} from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'tax_returns' })
export class TaxReturn extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @Unique({
    name: 'year_userId',
    msg: 'Tax return already exists for given year',
  })
  @Field()
  @Column({ type: DataType.INTEGER })
  year: number;

  @Unique('year_userId')
  @Column({ type: DataType.STRING })
  @Field()
  userId: string;

  @HasOne(() => Revenue)
  @Field(() => Revenue)
  revenue: Revenue;

  @HasOne(() => Assets)
  @Field(() => Assets)
  assets: Assets;

  @HasOne(() => DebtAndExpenses)
  @Field(() => DebtAndExpenses)
  debtAndExpenses: DebtAndExpenses;
}

@InputType()
export class TaxReturnInput {
  @Field()
  year: number;

  @Field()
  userId: string;

  @Field(() => RevenueInput)
  revenue: RevenueInput;

  @Field(() => AssetsInput)
  assets: AssetsInput;

  @Field(() => DebtAndExpensesInput)
  debtAndExpenses: DebtAndExpensesInput;
}

@InputType()
export class TaxReturnUpdateInput {
  @Field({ nullable: false })
  id: string;

  @Field(() => RevenueInput, { nullable: true })
  revenue?: RevenueInput;

  @Field(() => AssetsInput, { nullable: true })
  assets?: AssetsInput;

  @Field(() => DebtAndExpensesInput, { nullable: true })
  debtAndExpenses?: DebtAndExpensesInput;
}
