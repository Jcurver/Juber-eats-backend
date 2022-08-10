import { Restaurant } from '../entities/restaurant.entity';
import {
  ArgsType,
  Field,
  InputType,
  OmitType,
  PickType,
} from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
