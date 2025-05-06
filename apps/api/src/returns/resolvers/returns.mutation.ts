import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TaxReturn, TaxReturnInput, TaxReturnUpdateInput } from '../entities/return.model';
import { ReturnsService } from '../returns.service';

@Resolver(() => TaxReturn)
export class ReturnsMutation {
  constructor(private readonly taxReturnService: ReturnsService) {}

  @Mutation(() => TaxReturn)
  async createTaxReturn(
    @Args('input') input: TaxReturnInput,
  ): Promise<TaxReturn> {
    return this.taxReturnService.createTaxReturn(input);
  }

  @Mutation(() => TaxReturn)
  async updateTaxReturn(
    @Args('input') input: TaxReturnUpdateInput,
  ): Promise<TaxReturn> {
    return this.taxReturnService.updateTaxReturn(input);
  }
}
