import {
  Field,
  GraphQLISODateTime,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { TaxReturn } from './return.model';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

@ObjectType()
@Table({ tableName: 'debt_and_expenses' })
export class DebtAndExpenses extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => TaxReturn)
  @Column({ type: DataType.UUID })
  taxReturnId: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;

  @HasMany(() => ResidentialPropertyInterestExpense)
  @Field(() => [ResidentialPropertyInterestExpense])
  residentialInterestExpenses: ResidentialPropertyInterestExpense[];

  @HasMany(() => OtherDebt)
  @Field(() => [OtherDebt])
  otherDebts: OtherDebt[];
}

@InputType()
export class DebtAndExpensesInput {
  @Field(() => [ResidentialPropertyInterestExpenseInput], { nullable: true })
  residentialInterestExpenses?: ResidentialPropertyInterestExpenseInput[];

  @Field(() => [OtherDebtInput], { nullable: true })
  otherDebts?: OtherDebtInput[];
}

@ObjectType()
@Table({ tableName: 'residential_property_interest_expenses' })
export class ResidentialPropertyInterestExpense extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => DebtAndExpenses)
  @Column({ type: DataType.UUID })
  debtAndExpensesId: string;

  @BelongsTo(() => DebtAndExpenses)
  debtAndExpenses: DebtAndExpenses;

  @Column({ type: DataType.INTEGER })
  @Field()
  yearOfPurchase: number;

  @Column({ type: DataType.STRING })
  @Field()
  location: string;

  @Column({ type: DataType.STRING })
  @Field()
  lender: string;

  @Column({ type: DataType.STRING })
  @Field()
  lendersIdNumber: string;

  @Column({ type: DataType.STRING })
  @Field()
  loanNumber: string;

  @Column({ type: DataType.DATE })
  @Field(() => GraphQLISODateTime)
  borrowingDate: Date;

  @Column({ type: DataType.INTEGER })
  @Field()
  loanTermYears: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  totalAnnualPayments: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  faceValue: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  interestExpenses: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  outstandingDebt: number;
}

@InputType()
export class ResidentialPropertyInterestExpenseInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID("4")
  id?: string;

  @Field()
  @IsNumber()
  yearOfPurchase: number;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsString()
  lender: string;

  @Field()
  @IsString()
  lendersIdNumber: string;

  @Field()
  @IsString()
  loanNumber: string;

  @Field(() => GraphQLISODateTime)
  borrowingDate: Date;

  @Field()
  @IsNumber()
  loanTermYears: number;

  @Field()
  @IsNumber()
  totalAnnualPayments: number;

  @Field()
  @IsNumber()
  faceValue: number;

  @Field()
  @IsNumber()
  interestExpenses: number;

  @Field()
  @IsNumber()
  outstandingDebt: number;
}

@ObjectType()
@Table({ tableName: 'other_debts' })
export class OtherDebt extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => DebtAndExpenses)
  @Column({ type: DataType.UUID })
  debtAndExpensesId: string;

  @BelongsTo(() => DebtAndExpenses)
  debtAndExpenses: DebtAndExpenses;

  @Column({ type: DataType.STRING })
  @Field()
  title: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  interestExpenses: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  outstandingDebt: number;
}

@InputType()
export class OtherDebtInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID("4")
  id?: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsNumber()
  interestExpenses: number;

  @Field()
  @IsNumber()
  outstandingDebt: number;
}
