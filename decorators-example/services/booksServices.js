import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const booksPath = path.resolve("db", "books.json");

const updateBooks = async (books) => await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

export const getAll = async() => {
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}

export const getById = async(id) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    return result || null
}

export const add = async(data) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        ...data
    }
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

export const updateById = async (id, body) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);

    if(index === -1) {
        return null;
    }

    books[index] = {id, ...body};
    await updateBooks(books);
    return books[index];
}

export const removeById = async(id) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);

    if(index === -1) {
        return null;
    }

    const [result] = books.splice(index, 1);
    await updateBooks(books);
    return result;
}