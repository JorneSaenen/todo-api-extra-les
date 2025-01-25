import { Request, Response } from "express";
import { Todo } from "../models/TodoModel";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //const { completed } = req.body;
    const oldTodo = await Todo.findById(id);

    if (!oldTodo) {
      res.status(404).json({ message: `Todo with id ${id} not found` });
      return;
    }
    const todo = await Todo.findByIdAndUpdate(
      id,
      { completed: !oldTodo.completed },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: `Todo with id ${id} deleted` });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
