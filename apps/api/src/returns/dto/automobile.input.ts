import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString, IsNumber, IsUUID } from "class-validator";

@InputType()
export class AutomobileInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID('4')
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
