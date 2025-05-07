import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
  Model,
  Unique,
} from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model{
  @Field()
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  override id: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  ssn: string;

  @Field()
  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Field()
  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;
}
