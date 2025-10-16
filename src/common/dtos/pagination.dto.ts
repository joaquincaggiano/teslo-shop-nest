import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    example: 10,
    description: 'Limit of items per page',
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Type(() => Number) // Transform the value to a number
  limit?: number;

  @ApiProperty({
    example: 0,
    description: 'Offset of items per page',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
