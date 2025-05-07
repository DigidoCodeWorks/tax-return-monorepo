import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TaxReturn } from '../entities/return.model';
import { ReturnsService } from '../returns.service';
import { TaxReturnInput } from '../dto/tax-return.input';
import { TaxReturnUpdateInput } from '../dto/tax-return-update.input';

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
