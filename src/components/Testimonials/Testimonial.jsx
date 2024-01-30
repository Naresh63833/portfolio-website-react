import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import University from "../../img/university.png";
import College from "../../img/college.png";
import HSC from "../../img/school.png";
import SSLC from "../../img/school1.png";

const Testimonial = () => {
  const clients = [
    {
      img: University,
      review:
        "MCA | Bharathidasan University | 83.2% | 2021-23",
    },
    {
      img: College,
      review:
        "B.Sc.Physics | Islamiah College | 84% | 2018-21",
    },
    {
      img: HSC,
      review:
        "HSC | SVM Hr.Sec.School | 77% | 2017-18",
    },
    {
      img: SSLC,
      review:
        "SSLC | SVM Hr.Sec.School | 91.4% | 2015-16",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Education and</span>
        <span>Academic Details </span>
        <span>for me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
