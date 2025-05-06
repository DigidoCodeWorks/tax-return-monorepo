import { Module } from '@nestjs/common';
import { ReturnsService } from './returns.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturn } from './entities/return.model';
import { ReturnsMutation } from './resolvers/returns.mutation';

@Module({
  imports: [
    SequelizeModule.forFeature([
      TaxReturn,
    ]),
  ],
  providers: [ReturnsService, ReturnsMutation],
})
export class ReturnsModule {}
