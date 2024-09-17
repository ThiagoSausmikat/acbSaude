import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlideCard = () => {
  const settings = {
    dots: true,            // Habilitar dots
    infinite: true,        // Loop infinito
    slidesToShow: 1,       // Mostrar um slide por vez
    slidesToScroll: 1,     // Mover um slide por vez
    autoplay: true,        // Habilitar autoplay
    initialSlide: 0,       // Começar no primeiro slide
    appendDots: (dots) => (
      <ul style={{ margin: "0px", padding: "0px"}}>{dots}</ul>
    ),
  };

  return (
    <div className="body">
      <Slider {...settings}>
        {Sdata.map((value, index) => (
          <div className="box" key={index}>
            <div className="left">
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <button className="btn-primary">Visit Collections</button>
            </div>
            <div className="right">
              <img src={value.cover} alt="slide" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
