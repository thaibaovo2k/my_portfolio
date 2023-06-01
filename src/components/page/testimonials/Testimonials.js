import React from "react";
import Image1 from "../../asset/avatar1.jpg"

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'

import "swiper/css"
import "swiper/css/pagination"

import './testimonials.css'

const data = [
    {
      id: 1,
      image: Image1,
      title: "Jhon Doe",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 2,
      image: Image1,
      title: "Harry Clinton",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 3,
      image: Image1,
      title: "Sara Cill",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
  ];

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My client say</h2>
            <span className="section__subtitle">Testimonial</span>
        
            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Pagination]}
            >
                {data?.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img"/>
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;