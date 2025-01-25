import express from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todosController";

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *      200:
 *       description: The list of all todos
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Todo'
 *      500:
 *       description: Oops! Something went wrong
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *   post:
 *     summary: Add a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Oops! Something went wrong in the server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 * /todos/{id}:
 *   patch:
 *     summary: Update a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The todo was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Oops! Something went wrong in the server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The todo was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Oops! Something went wrong in the server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router
  .get("/", getTodos)
  .post("/", addTodo)
  .patch("/:id", updateTodo)
  .delete("/:id", deleteTodo);

export default router;
