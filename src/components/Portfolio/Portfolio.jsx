import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolios from "../../img/portfolio.png";
import Airline from "../../img/airline.png";
import Food from "../../img/food.png";
import Shopping from "../../img/shoping.png";
import Grocery from "../../img/grocery.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Portfolios} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Airline} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Food} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shopping} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Grocery} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
