import foto from "../../assets/slide1.jpg";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./styles.module.css";
import { Pagination, Navigation } from 'swiper/modules';

const Card2 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className={styles.cardSlider}>
            <div className={styles.cardConteiner}>
                <div className={styles.cardContent}>
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
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
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
                                <div className={styles.cardImage}>
                                    <div className={styles.imageContent}>
                                        <span className={styles.overlay}></span>
                                        <div className={styles.imageCard}>
                                            <img src={foto} className={styles.img} alt="Foto" />
                                        </div>
                                    </div>
                                    <div className={styles.imageContent}>
                                        <h2 className={styles.name}>Thiago Moura1</h2>
                                        <p className={styles.descripiton}>ola eu sou o thiago moura e tenha 30 anos.</p>
                                        <button className={styles.btn}>Ver mais</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.cardImage}>
                                    <div className={styles.imageContent}>
                                        <span className={styles.overlay}></span>
                                        <div className={styles.imageCard}>
                                            <img src={foto} className={styles.img} alt="Foto" />
                                        </div>
                                    </div>
                                    <div className={styles.imageContent}>
                                        <h2 className={styles.name}>Thiago Moura2</h2>
                                        <p className={styles.descripiton}>ola eu sou o thiago moura e tenha 30 anos.</p>
                                        <button className={styles.btn}>Ver mais</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.cardImage}>
                                    <div className={styles.imageContent}>
                                        <span className={styles.overlay}></span>
                                        <div className={styles.imageCard}>
                                            <img src={foto} className={styles.img} alt="Foto" />
                                        </div>
                                    </div>
                                    <div className={styles.imageContent}>
                                        <h2 className={styles.name}>Thiago Moura3</h2>
                                        <p className={styles.descripiton}>ola eu sou o thiago moura e tenha 30 anos.</p>
                                        <button className={styles.btn}>Ver mais</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.cardImage}>
                                    <div className={styles.imageContent}>
                                        <span className={styles.overlay}></span>
                                        <div className={styles.imageCard}>
                                            <img src={foto} className={styles.img} alt="Foto" />
                                        </div>
                                    </div>
                                    <div className={styles.imageContent}>
                                        <h2 className={styles.name}>Thiago Moura4</h2>
                                        <p className={styles.descripiton}>ola eu sou o thiago moura e tenha 30 anos.</p>
                                        <button className={styles.btn}>Ver mais</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.cardImage}>
                                    <div className={styles.imageContent}>
                                        <span className={styles.overlay}></span>
                                        <div className={styles.imageCard}>
                                            <img src={foto} className={styles.img} alt="Foto" />
                                        </div>
                                    </div>
                                    <div className={styles.imageContent}>
                                        <h2 className={styles.name}>Thiago Moura5</h2>
                                        <p className={styles.descripiton}>ola eu sou o thiago moura e tenha 30 anos.</p>
                                        <button className={styles.btn}>Ver mais</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
