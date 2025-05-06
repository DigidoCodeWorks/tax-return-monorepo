import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TaxReturn, TaxReturnInput } from '../entities/return.model';
import { ReturnsService } from '../returns.service';

@Resolver(() => TaxReturn)
export class ReturnsMutation {
  constructor(private readonly taxReturnService: ReturnsService) {}

  @Mutation(() => TaxReturn)
  async createTaxReturn(
    @Args('input') input: TaxReturnInput,
  ): Promise<TaxReturn> {
    console.log(input);
    return this.taxReturnService.createTaxReturn(input);
  }


}
