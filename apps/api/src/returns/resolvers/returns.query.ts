import { Args, Resolver } from '@nestjs/graphql';
import { TaxReturn } from '../entities/return.model';
import { ReturnsService } from '../returns.service';
import { Query } from '@nestjs/graphql';

@Resolver(() => TaxReturn)
export class ReturnsResolver {
  constructor(private readonly returnsService: ReturnsService) {}

  @Query(() => TaxReturn, { name: 'getTaxReturn' })
  getTaxReturn(@Args('id') id: string) {
    return this.returnsService.findOne(id);
  }

  @Query(() => [TaxReturn], { name: 'getTaxReturns' })
  getTaxReturns(@Args('userId') userId: string) {
    return this.returnsService.findAll(userId);
  }
}
