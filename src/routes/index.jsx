import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Error from './Error';
import BookView from './../fetaures/books/BookView';
import AddBook from './../fetaures/books/AddBook';
import EditBooks from './../fetaures/books/EditBooks';

const Index = () => {
  return (
    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show-books' element={<BookView/>}/>
      <Route path='/add-books' element={<AddBook/>}/>
      <Route path='/edit-book' element={<EditBooks/>}/>
      <Route path='*' element={<Error/>}/>
      
    </Routes>
      
    </BrowserRouter>
  )
}

export default Index;