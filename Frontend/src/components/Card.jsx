import React from 'react'

const Card = ({book}) => {
    return (
        <div className='p-3'>
            <div className="card bg-base-100 w-95 shadow-xl m-4 hover:scale-105 duration-100 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        src={book.image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.name}
                        <div className="badge badge-secondary">Free</div>
                    </h2>
                    <p>{book.title}</p>
                    <div className="card-actions justify-between mt-2">
                        <div className="badge badge-outline ">Price ${book.price}</div>
                        <div className="badge badge-outline cursor-pointer px-4 py-2 hover:bg-pink-500 hover:text-white">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
