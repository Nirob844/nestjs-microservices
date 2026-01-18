import { IsNotEmpty, IsNumber, IsString, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  stock: number;

  @IsString()
  @IsOptional()
  category?: string;
}

export class UpdateProductDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price?: number;

  @IsNumber()
  @Min(0)
  stock?: number;

  @IsString()
  category?: string;
}
