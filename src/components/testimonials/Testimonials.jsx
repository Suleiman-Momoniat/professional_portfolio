import React from 'react';
import './testimonials.css';
import TestimonialProvider from '../../assets/unknown.jpeg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: TestimonialProvider,
    name: "Bob Dylan",
    review: "Est non cupidatat Lorem voluptate mollit aliquip velit sunt fugiat voluptate eiusmod. Cupidatat consectetur nulla irure consequat magna voluptate. Aute irure pariatur do sunt non irure aute. Reprehenderit laborum dolore eiusmod eu exercitation ex laborum sit excepteur. Deserunt aute Lorem laboris cupidatat tempor tempor nisi et qui officia excepteur."
  },
  {
    avatar: TestimonialProvider,
    name: "Tina Snow",
    review: "Est non cupidatat Lorem voluptate mollit aliquip velit sunt fugiat voluptate eiusmod. Cupidatat consectetur nulla irure consequat magna voluptate. Aute irure pariatur do sunt non irure aute. Reprehenderit laborum dolore eiusmod eu exercitation ex laborum sit excepteur. Deserunt aute Lorem laboris cupidatat tempor tempor nisi et qui officia excepteur."
  },
  {
    avatar: TestimonialProvider,
    name: "Brian Armstrong",
    review: "Est non cupidatat Lorem voluptate mollit aliquip velit sunt fugiat voluptate eiusmod. Cupidatat consectetur nulla irure consequat magna voluptate. Aute irure pariatur do sunt non irure aute. Reprehenderit laborum dolore eiusmod eu exercitation ex laborum sit excepteur. Deserunt aute Lorem laboris cupidatat tempor tempor nisi et qui officia excepteur."
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Testimonial Provider" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials