import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

const app = express();
const port = 5000;

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todoApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    app.get('/', async (req, res) => {
      try {
        const todo = new Todo({
          title: "Learn MongoDB",
          desc: "Understand the basics of Mongoose and MongoDB",
        });

        // Wait for the todo to be saved
        await todo.save();
        console.log("Todo saved:", todo);
        res.send('Todo saved!');
      } catch (error) {
        console.error("Error saving todo:", error);
        res.status(500).send("Error saving todo");
      }
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

startServer();
