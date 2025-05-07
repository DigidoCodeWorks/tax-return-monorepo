import { Field, InputType, ObjectType } from '@nestjs/graphql';
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
@Table({ tableName: 'assets' })
export class Assets extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  override id: string;

  @ForeignKey(() => TaxReturn)
  @Column({ type: DataType.UUID })
  taxReturnId: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;

  @HasMany(() => DomesticRealEstate)
  @Field(() => [DomesticRealEstate])
  domesticRealEstate: DomesticRealEstate[];

  @HasMany(() => Automobile)
  @Field(() => [Automobile])
  automobiles: Automobile[];
}

@InputType()
export class AssetsInput {
  @Field(() => [DomesticRealEstateInput])
  domesticRealEstate: DomesticRealEstateInput[];

  @Field(() => [AutomobileInput])
  automobiles: AutomobileInput[];
}

@ObjectType()
@Table({ tableName: 'domestic_real_estates' })
export class DomesticRealEstate extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => Assets)
  @Column({ type: DataType.UUID })
  assetsId: string;

  @BelongsTo(() => Assets)
  assets: Assets;

  @Column({ type: DataType.STRING })
  @Field()
  landlineNumber: string;

  @Column({ type: DataType.STRING })
  @Field()
  address: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  realEstateValuation: number;
}

@InputType()
export class DomesticRealEstateInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @Field()
  @IsString()
  landlineNumber: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsNumber()
  realEstateValuation: number;
}

@ObjectType()
@Table({ tableName: 'automobiles' })
export class Automobile extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field()
  override id: string;

  @ForeignKey(() => Assets)
  @Column({ type: DataType.UUID })
  assetsId: string;

  @BelongsTo(() => Assets)
  assets: Assets;

  @Column({ type: DataType.STRING })
  @Field()
  plateNumber: string;

  @Column({ type: DataType.INTEGER })
  @Field()
  yearOfPurchase: number;

  @Column({ type: DataType.INTEGER })
  @Field()
  purchasePrice: number;
}

@InputType()
export class AutomobileInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: string;

  @Field()
  @IsString()
  plateNumber: string;

  @Field()
  @IsNumber()
  yearOfPurchase: number;

  @Field()
  @IsNumber()
  purchasePrice: number;
}
