import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

const initialState = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        category: "Fiction",
        description: "Harper Lee's Pulitzer Prize-winning novel about racial injustice in a small Alabama town.",
        price: 10.99,
    },
    {
        id: 2,
        name: "1984",
        category: "Fiction",
        description: "George Orwell's dystopian novel about totalitarianism and surveillance.",
        price: 12.50,
    },
    {
        id: 3,
        name: "The Great Gatsby",
        category: "Fiction",
        description: "F. Scott Fitzgerald's classic novel set in the roaring twenties.",
        price: 9.99,
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        category: "Fiction",
        description: "Jane Austen's romantic novel about love and class in early 19th-century England.",
        price: 8.75,
    },
    {
        id: 5,
        name: "Harry Potter and the Sorcerer's Stone",
        category: "Fantasy",
        description: "J.K. Rowling's first book in the Harry Potter series about a young wizard.",
        price: 14.99,
    },
    {
        id: 6,
        name: "The Catcher in the Rye",
        category: "Fiction",
        description: "J.D. Salinger's coming-of-age novel about teenage angst and rebellion.",
        price: 11.25,
    },
    {
        id: 7,
        name: "Lord of the Rings: The Fellowship of the Ring",
        category: "Fantasy",
        description: "J.R.R. Tolkien's epic fantasy novel about a quest to destroy a powerful ring.",
        price: 15.99,
    },
    {
        id: 8,
        name: "The Hobbit",
        category: "Fantasy",
        description: "J.R.R. Tolkien's classic adventure novel about a hobbit's journey to reclaim treasure.",
        price: 13.50,
    },
    {
        id: 9,
        name: "The Alchemist",
        category: "Fiction",
        description: "Paulo Coelho's philosophical novel about a shepherd's journey to find treasure.",
        price: 9.25,
    },
    {
        id: 10,
        name: "Moby-Dick",
        category: "Fiction",
        description: "Herman Melville's epic novel about a captain's obsession with hunting a white whale.",
        price: 10.99,
    },
    {
        id: 11,
        name: "To the Lighthouse",
        category: "Fiction",
        description: "Virginia Woolf's modernist novel about a family's summer vacation.",
        price: 12.75,
    },
    {
        id: 12,
        name: "The Hunger Games",
        category: "Young Adult",
        description: "Suzanne Collins's dystopian novel about a girl who competes in a deadly competition.",
        price: 11.99,
    },
    {
        id: 13,
        name: "The Road",
        category: "Fiction",
        description: "Cormac McCarthy's post-apocalyptic novel about a father and son's journey.",
        price: 10.50,
    },
    {
        id: 14,
        name: "Brave New World",
        category: "Fiction",
        description: "Aldous Huxley's dystopian novel about a society controlled by technology.",
        price: 12.99,
    },
    {
        id: 15,
        name: "The Kite Runner",
        category: "Fiction",
        description: "Khaled Hosseini's novel about friendship, betrayal, and redemption in Afghanistan.",
        price: 9.75,
    },
    {
        id: 16,
        name: "The Count of Monte Cristo",
        category: "Fiction",
        description: "Alexandre Dumas's adventure novel about a man's quest for revenge.",
        price: 13.25,
    },
    {
        id: 17,
        name: "Jane Eyre",
        category: "Fiction",
        description: "Charlotte Brontë's classic novel about a young governess's journey to find love.",
        price: 8.99,
    },
    {
        id: 18,
        name: "Animal Farm",
        category: "Fiction",
        description: "George Orwell's allegorical novella about a group of farm animals who rebel against their human farmer.",
        price: 9.50,
    },
    {
        id: 19,
        name: "The Picture of Dorian Gray",
        category: "Fiction",
        description: "Oscar Wilde's novel about a man who remains young while his portrait ages.",
        price: 10.25,
    },
    {
        id: 20,
        name: "The Girl with the Dragon Tattoo",
        category: "Mystery",
        description: "Stieg Larsson's crime thriller about a journalist and a hacker who investigate a decades-old disappearance.",
        price: 14.50,
    },
];

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<any>): any => {
            const newBook = {
                ...action.payload,
                id: state[state.length - 1].id + 1
            };
            // Pushing the new book to the state array
            state.push(newBook);
        },
        deleteBook: (state, action: PayloadAction<any>): any => {
            return state.filter((book: any) => book.id !== action.payload);
        },
        updateBook: (state, action: PayloadAction<any>): any => {
            return state.map((book: any) => book.id === action.payload.id ? action.payload : book);
        }
    }
})

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;