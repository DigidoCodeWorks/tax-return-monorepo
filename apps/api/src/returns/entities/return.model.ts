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

import {
  IsInt,
  Min,
  IsString,
  IsOptional,
  ValidateNested,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  @Field(() => Revenue, { nullable: true })
  revenue?: Revenue;

  @HasOne(() => Assets)
  @Field(() => Assets, { nullable: true })
  assets?: Assets;

  @HasOne(() => DebtAndExpenses)
  @Field(() => DebtAndExpenses, { nullable: true })
  debtAndExpenses?: DebtAndExpenses;
}

@InputType()
export class TaxReturnInput {
  @IsInt()
  @Min(1900)
  @Field()
  year: number;

  @IsString()
  @Field()
  userId: string;

  @Field(() => RevenueInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => RevenueInput)
  revenue?: RevenueInput;

  @Field(() => AssetsInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => AssetsInput)
  assets?: AssetsInput;

  @Field(() => DebtAndExpensesInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => DebtAndExpensesInput)
  debtAndExpenses?: DebtAndExpensesInput;
}

@InputType()
export class TaxReturnUpdateInput {
  @Field({ nullable: false })
  @IsString()
  @IsUUID(4)
  id: string;

  @Field(() => RevenueInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => RevenueInput)
  revenue?: RevenueInput;

  @Field(() => AssetsInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => AssetsInput)
  assets?: AssetsInput;

  @Field(() => DebtAndExpensesInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => DebtAndExpensesInput)
  debtAndExpenses?: DebtAndExpensesInput;
}
