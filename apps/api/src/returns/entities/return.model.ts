import { ObjectType, Field } from '@nestjs/graphql';

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

import { DebtAndExpenses } from './debt.model';
import { Revenue } from './revenue.model';
import { Assets } from './assets.model';

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

  @Field({ nullable: true })
  @Column({ type: DataType.INTEGER })
  lastStep?: number;

  @Unique('year_userId')
  @Column({ type: DataType.STRING })
  @Field()
  userId: string;

  @HasOne(() => Revenue)
  @Field(() => Revenue, { nullable: true })
  revenue?: Revenue;

  @HasOne(() => Assets)
  @Field(() => Assets, { nullable: true })
  assets?: Assets;

  @HasOne(() => DebtAndExpenses)
  @Field(() => DebtAndExpenses, { nullable: true })
  debtAndExpenses?: DebtAndExpenses;
}
