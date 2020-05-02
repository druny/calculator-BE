import mongoose, { Schema, Document } from 'mongoose';

import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from '@/constants';

export interface IOperationsHistory extends Document {
  id: string;
  leftNumber: number;
  rightNumber: number;
  operation: string;
}

const operationsHistorySchema: Schema = new Schema({
  leftNumber: { type: Number, required: true },
  rightNumber: { type: Number, required: true },
  operation: {
    type: String,
    required: true,
    enum: [ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION],
  },
});

export default mongoose.model<IOperationsHistory>('OperationsHistory', operationsHistorySchema);
