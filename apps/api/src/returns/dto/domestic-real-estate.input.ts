import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

@InputType()
export class DomesticRealEstateInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @Field()
  @IsString()
  landlineNumber: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsNumber()
  realEstateValuation: number;
}