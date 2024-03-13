import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as booksServices from "../services/booksServices.js"
import HttpError from "../helpers/HttpError.js";

const getAll = async (req, res) => {
    const result = await booksServices.getAll();

    res.json(result);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await booksServices.getById(id);

    if(!result) {
        throw HttpError(404)
    }

    res.json(result);
}

const add = async (req, res) => {
    const result = await booksServices.add(req.body);

    res.status(201).json(result)
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await booksServices.updateById(id, req.body);

    if(!result) {
        throw HttpError(404)
    }

    res.json(result);
}

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await booksServices.removeById(id);

    if(!result) {
        throw HttpError(404)
    }

    res.status(204).json()
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    removeById: ctrlWrapper(removeById)
}