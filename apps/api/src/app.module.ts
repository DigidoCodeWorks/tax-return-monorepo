import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import path, { join } from 'path';
import { ReturnsModule } from './returns/returns.module';
import {
  Assets,
  DomesticRealEstate,
  Automobile,
} from './returns/entities/assets.model';
import {
  DebtAndExpenses,
  ResidentialPropertyInterestExpense,
  OtherDebt,
} from './returns/entities/debt.model';
import { TaxReturn } from './returns/entities/return.model';
import {
  Revenue,
  WageIncome,
  VehicleAllowance,
  PensionPayment,
} from './returns/entities/revenue.model';
import * as fs from 'fs';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ReturnsModule,
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync(path.join(__dirname, '..', 'ca.pem')).toString(),
        },
      },
      models: [
        Automobile,
        DomesticRealEstate,
        TaxReturn,
        Revenue,
        DebtAndExpenses,
        WageIncome,
        VehicleAllowance,
        PensionPayment,
        ResidentialPropertyInterestExpense,
        OtherDebt,
        Assets,
      ],
      sync:{
        alter:true
      },
      synchronize: true,
      autoLoadModels: true,
      
    }),
    SequelizeModule.forRoot({
      name: 'registryConnection',
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME_REGISTRY,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync(path.join(__dirname, '..', 'ca.pem')).toString(),
        },
      },
      models: [User],
      synchronize: true,
      autoLoadModels: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      introspection:true,
      autoSchemaFile: join(__dirname, 'schema.gql'),
    }),
  ],
  providers: [AppService, AppController],
})
export class AppModule {}
