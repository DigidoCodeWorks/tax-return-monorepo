import { Module } from '@nestjs/common';
import { ReturnsService } from './returns.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturn } from './entities/return.model';
import { ReturnsMutation } from './resolvers/returns.mutation';
import { ReturnsResolver } from './resolvers/returns.query';

@Module({
  imports: [
    SequelizeModule.forFeature([
      TaxReturn,
    ]),
  ],
  providers: [ReturnsService, ReturnsMutation, ReturnsResolver],
})
export class ReturnsModule {}
