import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './entities/todo.entity';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}
  async create(createTodoDto: CreateTodoDto) {
    const newTodo = await this.todoModel.create(createTodoDto);

    return newTodo;
  }

  findAll() {
    return this.todoModel.find({});
  }

  async findOne(id: string) {
    const todo = await this.todoModel.findById(id);

    if (!todo)
      throw new NotFoundException(
        `A todo item with the id ${id} was not found`,
      );

    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todoItem = await this.findOne(id);

    await todoItem.updateOne(updateTodoDto);

    return { ...todoItem.toJSON(), ...updateTodoDto };
  }

  async remove(id: string) {
    const { deletedCount } = await this.todoModel.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new NotFoundException(`todo item with id ${id} not found`);
    return;
  }
}
