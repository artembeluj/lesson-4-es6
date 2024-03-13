import express from "express";
import booksControllers from "../controllers/booksControllers.js";
import validateBody from "../decorators/validateBody.js";
import { bookAddSchema, bookUpdateSchema } from "../schemas/booksSchemas.js";

const booksRouter = express.Router();

booksRouter.get("/", booksControllers.getAll);

booksRouter.get("/:id", booksControllers.getById);

booksRouter.post("/", validateBody(bookAddSchema), booksControllers.add);

booksRouter.put("/:id", validateBody(bookAddSchema), booksControllers.updateById);

booksRouter.delete("/:id", booksControllers.removeById);


export default booksRouter;