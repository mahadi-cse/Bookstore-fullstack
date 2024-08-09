import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import book_list from '../../public/booklist.json'
import Card from './Card';

const Freebook = () => {
    const freeBook = book_list.filter(book => book.price === 0);
    console.log(freeBook.length);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='max-w-screen-2xl container md:px-20 px-4'>
            <div>
                <h1 className='font-semibold 2xl'>Free offerd courses</h1>
                <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident, vero totam laboriosam nemo beatae. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            freeBook.map(book => <Card key={book.id} book={book} />)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Freebook
