import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({
    index: true,
    required: true,
  })
  title: string;

  @Prop({ type: String, required: false, default: '' })
  description: string;

  @Prop({ type: Boolean, default: false })
  isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
