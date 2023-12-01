import React, { useRef } from 'react'
import { Box } from '../../styles'
import classes from './component1.module.css'
import left from '../../../components/assets/images/left.svg'
import right from '../../../components/assets/images/right.svg'
import coin from '../../assets/images/coin.svg'
import clock from '../../assets/images/clock.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
export default function TabComponent() {

  return (
    <>
     
        <div className={classes.main}>
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={false}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
              <SwiperSlide>
                {<Box>
                  <div>
                    <img src={coin} alt="" />
                  </div>
                  <div>
                    <p>Integer Maecenas Eget Viverra</p>
                    <div>
                      <img src={clock} alt="" />
                      <small>5mins read</small>
                      <button>new</button>
                    </div>
                  </div>
                </Box>}
              </SwiperSlide>
              <SwiperSlide>
                {<Box>
                  <div>
                    <img src={coin} alt="" />
                  </div>
                  <div>
                    <p>Integer Maecenas Eget Viverra</p>
                    <div>
                      <img src={clock} alt="" />
                      <small>5mins read</small>
                      <button>new</button>
                    </div>
                  </div>
                </Box>}
              </SwiperSlide>
              <SwiperSlide>
                {<Box>
                  <div>
                    <img src={coin} alt="" />
                  </div>
                  <div>
                    <p>Integer Maecenas Eget Viverra</p>
                    <div>
                      <img src={clock} alt="" />
                      <small>5mins read</small>
                      <button>new</button>
                    </div>
                  </div>
                </Box>}
              </SwiperSlide>
              <SwiperSlide>
                {<Box>
                  <div>
                    <img src={coin} alt="" />
                  </div>
                  <div>
                    <p>Integer Maecenas Eget Viverra</p>
                    <div>
                      <img src={clock} alt="" />
                      <small>5mins read</small>
                      <button>new</button>
                    </div>
                  </div>
                </Box>}
              </SwiperSlide>
          

          </Swiper>
        </div>

      <div className={classes.controller}>

        <div className='swiper-pagination'>
        </div>
        <div className={'swiperController'}>
          <button className='swiper-button-next'>
            <img src={right} alt="" />
          </button>
          <button className='swiper-button-prev'>
            <img src={left} alt="" />
          </button>
        </div>

      </div>

    </>

  )

}
