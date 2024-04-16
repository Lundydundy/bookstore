"use client";

import { useDispatch, useSelector } from "react-redux";
import { deleteBook, addBook } from "../../redux/slices/bookSlice";
import React, { useState, useEffect } from "react";
import "./Book.css"
import Viewer from "../Viewer/page";

const Books = () => {

    const [modelView, setModelView] = useState("none");
    const [modelBookId, setModelBookId] = useState("")
    const [reduxBooks, setBooks] = useState([]);
    const [mode, setMode] = useState(null);

    const books = useSelector((state: any) => state.books)
    const dispatch = useDispatch();

    useEffect(() => {
        setBooks(books)
    }, [books])

    const handleRemoveBook = (bookId: any) => {
        dispatch(deleteBook(bookId))
    }

    const handleModelView = (action: any, bookId: any, mode: any) => {
        action === "open" ? setModelView("flex") : setModelView("none");
        if (bookId !== -1) {
            setModelBookId(bookId);
        }
        setMode(mode);
    }

    return (
        <>
            <button className="add-book-button" onClick={() => handleModelView("open", -1, "new")}>Add Book</button>

            <Viewer view={modelView} setModelView={setModelView} bookId={modelBookId} books={books} mode={mode} />
            <div className="flex-container">
            {reduxBooks.map((book: any) => {
                return (
                    <div className="book" key={book.id}>
                        <div onClick={() => handleModelView("open", book.id, "edit")}>
                            <h1>{book.name}</h1>
                            <p>${parseFloat(book.price).toFixed(2)}</p>
                            <p>{book.category}</p>
                        </div>
                        <div>
                            <button className="delete-button" onClick={() => handleRemoveBook(book.id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Books;