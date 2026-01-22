import { Transform } from 'class-transformer'
import { IsInt, IsNotEmpty } from 'class-validator'

export class ShareLocationDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value) ?? null)
  @IsInt()
  latitude: number

  @IsNotEmpty()
  @Transform(({ value }) => Number(value) ?? null)
  @IsInt()
  longitude: number

  @IsNotEmpty()
  @Transform(({ value }) => Number(value) ?? null)
  @IsInt()
  accuracy: number
}
