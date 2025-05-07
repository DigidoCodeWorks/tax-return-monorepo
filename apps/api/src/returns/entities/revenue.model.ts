import { Field, ObjectType } from '@nestjs/graphql';
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

@ObjectType()
@Table({ tableName: 'revenues' })
export class Revenue extends Model {
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

  @HasMany(() => WageIncome)
  @Field(() => [WageIncome])
  wageIncomes: WageIncome[];

  @HasMany(() => VehicleAllowance)
  @Field(() => [VehicleAllowance])
  vehicleAllowances: VehicleAllowance[];

  @HasMany(() => PensionPayment)
  @Field(() => [PensionPayment])
  pensionPayments: PensionPayment[];
}



@ObjectType()
@Table({ tableName: 'wage_incomes' })
export class WageIncome extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => Revenue)
  @Column({ type: DataType.UUID })
  revenueId: string;

  @BelongsTo(() => Revenue)
  revenue: Revenue;

  @Column({ type: DataType.STRING })
  @Field()
  ssn: string;

  @Column({ type: DataType.STRING })
  @Field()
  name: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  salaryAmount: number;
}



@ObjectType()
@Table({ tableName: 'vehicle_allowances' })
export class VehicleAllowance extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => Revenue)
  @Column({ type: DataType.UUID })
  revenueId: string;

  @BelongsTo(() => Revenue)
  revenue: Revenue;

  @Column({ type: DataType.STRING })
  @Field()
  type: string;

  @Column({ type: DataType.STRING })
  @Field()
  name: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  amount: number;
}



@ObjectType()
@Table({ tableName: 'pension_payments' })
export class PensionPayment extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => Revenue)
  @Column({ type: DataType.UUID })
  revenueId: string;

  @BelongsTo(() => Revenue)
  revenue: Revenue;

  @Column({ type: DataType.STRING })
  @Field()
  type: string;

  @Column({ type: DataType.STRING })
  @Field()
  name: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  amount: number;
}

