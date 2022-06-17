import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaHeart, FaRegHeart, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "./carousel.css";

import { useEffect, useState } from "react";
import axios from "axios";


const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} /> */}
      <FaAngleLeft style={{ color: 'black', fontSize: '50px' }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>

      <FaAngleRight style={{ color: 'black', fontSize: '50px' }} />
    </div>
  );
};

const Carousel = ({ image }) => {


  return (
    <div className="carousel">

      <Slider className="Slider"
        autoplay
        autoplaySpeed={2000}
        dots={true}
   
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div >
              <img
                src={image[i]}
                alt=""
                style={{
                  width: "50px",
                 
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {image.map((item) => (
          <div className="BigImg" key={item}>
            <img src={item} />
           
          </div>
        ))}
      </Slider>
    </div>
  );
};






export default Carousel;
