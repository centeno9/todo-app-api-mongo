import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  description?: string;
}
