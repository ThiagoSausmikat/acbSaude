
import foto from "../../assets/slide1.jpg";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./styles.module.css";
import { Pagination, Navigation } from 'swiper/modules';

const Card = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className={styles.body}>

      <div className={styles.slideContainer}>
        <div className={styles.slideContent}>
          <div className={styles.slideContainer}>
            <div className={styles.cardWrapper}>
              <Swiper
                onSwiper={setSwiperRef}
                centeredSlides={false} // Ensure slides are centered
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true} // Ensure navigation is enabled
                modules={[Pagination, Navigation]}
                className={styles.mySwiper}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imageContent}>
                      <sapn className={styles.overlay}></sapn>
                      <div className={styles.cardImage}>
                        <img src={foto} className={styles.cardImg} />

                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h2 className={styles.name}>Thiago Moura</h2>
                      <p className={styles.description}>Olá me chamo thiago moura tenho 30 anos</p>
                      <button className={styles.button}>View More</button>
                    </div>

                  </div>

                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imageContent}>
                      <sapn className={styles.overlay}></sapn>
                      <div className={styles.cardImage}>
                        <img src={foto} className={styles.cardImg} />

                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h2 className={styles.name}>Thiago Moura</h2>
                      <p className={styles.description}>Olá me chamo thiago moura tenho 30 anos</p>
                      <button className={styles.button}>View More</button>
                    </div>

                  </div>

                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imageContent}>
                      <sapn className={styles.overlay}></sapn>
                      <div className={styles.cardImage}>
                        <img src={foto} className={styles.cardImg} />

                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h2 className={styles.name}>Thiago Moura</h2>
                      <p className={styles.description}>Olá me chamo thiago moura tenho 30 anos</p>
                      <button className={styles.button}>View More</button>
                    </div>

                  </div>

                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imageContent}>
                      <sapn className={styles.overlay}></sapn>
                      <div className={styles.cardImage}>
                        <img src={foto} className={styles.cardImg} />

                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h2 className={styles.name}>Thiago Moura</h2>
                      <p className={styles.description}>Olá me chamo thiago moura tenho 30 anos</p>
                      <button className={styles.button}>View More</button>
                    </div>

                  </div>

                </SwiperSlide>

              </Swiper>

            </div>
          </div>
        </div>
      </div>

    </div>
  );


};

export default Card;
