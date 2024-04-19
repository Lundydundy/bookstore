"use client";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../../redux/slices/bookSlice";
import React, { useEffect, useState } from "react";
import "./Viewer.css"


const Viewer = ({ books, bookId, view, setModelView, mode }: any) => {

    const [bookDetails, setBookDetails] = useState({
        id: "",
        name: '',
        category: '',
        price: '',
        description: ''
    });
    const book = books.filter((book: any) => book.id === parseInt(bookId))[0];


    const dispatch = useDispatch();

    const handleUpdateBook = (details: any) => {
        dispatch(updateBook(details));
        setModelView("none");
    }

    const handleAddBook = (details: any) => {
        if (!details.name || !details.price || !details.category || !details.description) return;

        dispatch(addBook(details));
            setModelView("none");

    }

    useEffect(() => {
        if (mode !== "edit") {
            setBookDetails({
                id: "",
                name: '',
                category: '',
                price: '',
                description: ''
            });
        } else if (book){
            setBookDetails({
                id: book.id,
                name: book.name,
                category: book.category,
                price: book.price,
                description: book.description
                
            });
        }
    }, [book, mode]);

    const handleTitleChange = (e: any) => {
        setBookDetails({ ...bookDetails, name: e.target.value })
        console.log(e.target.value)

    }
    const handleCategoryChange = (e: any) => {
        setBookDetails({ ...bookDetails, category: e.target.value })
        console.log(e.target.value)

    }
    const handlePriceChange = (e: any) => {
        setBookDetails({ ...bookDetails, price: e.target.value })
        console.log(e.target.value)

    }
    const handleDescriptionChange = (e: any) => {
        setBookDetails({ ...bookDetails, description: e.target.value })
        console.log(e.target.value)
    }

    const handleModalView = () => {
        setModelView("none");
    }

    console.log(mode)
    console.log(bookDetails)
    if (mode === "edit") {
        return (
            <div style={{ display: view }} className="book-details">
                <svg style={{ alignSelf: "end" }} onClick={handleModalView} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <label>Title</label>
                <input onChange={handleTitleChange} className="title" value={bookDetails?.name} />
                <label>Price</label>
                <input type="number"  onChange={handlePriceChange} className="price" value={bookDetails?.price} />
                <label>Category</label>
                <input onChange={handleCategoryChange} className="category" value={bookDetails?.category} />
                <label>Description</label>
                <textarea onChange={handleDescriptionChange} className="description" value={bookDetails?.description} />

                <button className="update-button" onClick={() => handleUpdateBook(bookDetails)}>Update</button>

            </div>
        )
    } else {
        
        return (
            <div style={{ display: view }} className="book-details">
                <svg style={{ alignSelf: "end" }} onClick={handleModalView} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <label>Title</label>
                <input required onChange={handleTitleChange} className="title" value={bookDetails?.name} />
                <label>Price</label>
                <input type="number" required onChange={handlePriceChange} className="price" value={bookDetails?.price} />
                <label>Category</label>
                <input required onChange={handleCategoryChange} className="category" value={bookDetails?.category} />
                <label>Description</label>
                <textarea required onChange={handleDescriptionChange} className="description" value={bookDetails?.description}/>

                <button className="add-button" onClick={() => handleAddBook(bookDetails)}>Add</button>

            </div>
        )
    }
}

export default Viewer;