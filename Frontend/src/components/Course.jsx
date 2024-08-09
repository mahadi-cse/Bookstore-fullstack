import React from 'react'
import book_list from '../../public/booklist.json'
import Card from './Card';


const Course = () => {
  return (
    <div className='max-w-screen-2xl container md:px-20 px-4'>
      <div className='mt-28 text-center space-y-4'>
        <h1 className='text-2xl sm:text-4xl'>We are delighted to you <span className='text-pink-500'>here:)</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere aspernatur quo non aut consectetur deleniti saepe vel voluptatibus cumque quas, fugiat, cum magni repudiandae provident ullam. Laborum, est minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos?</p>
        <button className='bg-pink-500 rounded-md hover:bg-700 text-white px-4 py-2'>Back</button>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book_list.map(book => <Card key={book.id} book={book} />)
        }
      </div>
    </div>
  )
}

export default Course
