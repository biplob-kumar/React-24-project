import React from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/EffectCoverflow"
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow,Pagination,Navigation } from 'swiper';
import slide_img_1 from "./assets/images/img_1.jpg";
import slide_img_2 from "./assets/images/img_2.jpg";
import slide_img_3 from "./assets/images/img_3.jpg";
import slide_img_4 from "./assets/images/img_4.jpg";
import slide_img_5 from "./assets/images/img_5.jpg";
import slide_img_6 from "./assets/images/img_6.jpg";
import slide_img_7 from "./assets/images/img_7.jpg";


import './App.css'
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

function App() {
  return (
    <div className="container">
      <div className="heading"> Img Gallary</div>
      <Swiper
             effect={'coverflow'}
             grabcursor={true}
             contredslide={true}
             loop={true}
             slidepreview={"auto"}
             coverflowEffect={
               {
                 rotate:0,
                 stretch:0,
                 depath:100,
                 modifire:2.5,
     
               }
             }
            pagination={{el:".swiper-pagination",clickable:true}}
            navigation={{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev',
              clickable:true
            }}
             modules={[EffectCoverflow,Pagination,Navigation]}
          className='swiper-container'
      > 
 

        <SwiperSlide>
           <img src={slide_img_1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_4} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_5} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_6} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={slide_img_7} alt="slide" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className= "fa-solid fa-arrow-right right">
           <ion-icon name="arow-back-outline" ></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrrow">
           <ion-icon name="arow-forword-outline" ></ion-icon>
          </div>
          <div className="swiper-pagination">

          </div>
        </div>

      </Swiper>
    </div>
  )
}

export default App
