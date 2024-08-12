import React, { useEffect, useState } from 'react'
import Card from './Card';
import {Link} from 'react-router-dom'

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    const getBook = async () => {
       await fetch('https://bookstore-mahadi.onrender.com/book')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err))
      
    }
    getBook();
  },[])
  return (
    <div className='max-w-screen-2xl container md:px-20 px-4 pt-28'>
      <div className=' text-center space-y-4'>
        <h1 className='text-2xl sm:text-4xl'>We are delighted to you <span className='text-pink-500'>here:)</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere aspernatur quo non aut consectetur deleniti saepe vel voluptatibus cumque quas, fugiat, cum magni repudiandae provident ullam. Laborum, est minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos?</p>
        <Link to ='/'> <button className='bg-pink-500 rounded-md hover:bg-700 text-white px-4 py-2'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          books.map(book => <Card key={book.id} book={book} />)
        }
      </div>
    </div>
  )
}

export default Course
