import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isCompleted: boolean;
}
