import { Field, InputType } from '@nestjs/graphql';
import { DomesticRealEstateInput } from './domestic-real-estate.input';
import { AutomobileInput } from './automobile.input';

@InputType()
export class AssetsInput {
  @Field(() => [DomesticRealEstateInput])
  domesticRealEstate: DomesticRealEstateInput[];

  @Field(() => [AutomobileInput])
  automobiles: AutomobileInput[];
}
