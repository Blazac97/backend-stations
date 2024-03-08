import {
  IsString,
  IsArray,
  IsOptional,
  IsDateString,
  ValidateNested,
} from 'class-validator';

export class CreateRoutePointDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsDateString()
  timeDeparture: Date | string;

  @IsOptional()
  @IsDateString()
  timeArrival: Date | string;
}

export class UpdateRoutePointDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsDateString()
  timeDeparture: Date | string;

  @IsOptional()
  @IsDateString()
  timeArrival: Date | string;
}

export class UpdateRouteDto {
  @IsString()
  name: string;

  @IsArray()
  points: UpdateRoutePointDto[];
}

export class CreateRouteDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested()
  points: CreateRoutePointDto[];
}
