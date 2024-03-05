import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import genre1 from '../Assets/genre1.jpeg'
import genre2 from '../Assets/genre2.jpeg'
import genre3 from '../Assets/genre3.jpeg'
import genre4 from '../Assets/genre4.jpeg'
import genre5 from '../Assets/genre5.jpeg'
import genre6 from '../Assets/genre6.jpeg'
import genre7 from '../Assets/genre7.jpeg'
import genre8 from '../Assets/genre8.jpeg'
import genre9 from '../Assets/genre9.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Allgenre.css';

// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';

const Allgenre = () => {
  return (
    <div className="all-genre">
    <div className="heading-section">
        <h1>Most Popular Style</h1>
        <hr />
    </div>
    
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination,Autoplay,Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><a href="link-to-genre1"><img src={genre1} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre2} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre3} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre4} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre5} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre6} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre7} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre8} alt="Genre 1" /></a></SwiperSlide>
      <SwiperSlide><a href="link-to-genre1"><img src={genre9} alt="Genre 1" /></a></SwiperSlide>
     
     
    </Swiper>
  </div>
  )
}

export default Allgenre
