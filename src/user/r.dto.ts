import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class RDTO {
  @Type(() => Number)
  @Max(10)
  @Min(1)
  @IsInt()
  range: number;
}