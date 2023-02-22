const { createSlice } = require("@reduxjs/toolkit")

const initialBooks = {
    books: [
        {id: 1, title: "Hello World", author: "Moklasur rahman"},
        {id: 2, title: "Hello Bangladesh", author: "Moklasur rahman taj"},
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
       
        addBook: (state, action) => {
        state.books.push(action.payload);
        },

        updateBook: (state, action) => {
            const {id, title, author} = action.payload
            const isBookExist = state.books.filter((book)=> book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
            },

        deletBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
            },
    },
})

export const { showBooks, addBook, deletBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;