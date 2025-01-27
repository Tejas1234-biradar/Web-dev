import mongoose from "mongoose";
import { boolean } from "webidl-conversions";
const TodoSchema=new mongoose.Schema({
    title: {
      type: String, // Use `String` instead of `"string"`
      required: true, // Marking it as required
    },
    desc: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean, // Use `Boolean` instead of `"boolean"`
      default: false, // Default value for isDone
    },
  });
export const Todo =mongoose.model('Todo',TodoSchema)