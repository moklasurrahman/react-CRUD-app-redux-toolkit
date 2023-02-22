import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletBook } from './BooksSlice';
import "./bookView.scss"

import { Link } from 'react-router-dom';

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDeletBook = (id) =>{
    dispatch(deletBook(id))
  }
  return (
    <div className='bookViews'>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
       
        <tbody>
          {books && books.map((book)=>{
            const {id, title, author} = book;
            return <tr key={id}>
              {/* <td>{id}</td> */}
              <td>{title}</td>
              <td>{author}</td>
              <td>
                <Link to="/edit-book" state={{id, title, author}}>
                  <button>Edit</button>
                </Link>

                <button onClick={()=>{handleDeletBook(id)}}>Delet</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BookView


