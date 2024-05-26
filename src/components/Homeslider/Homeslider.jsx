import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css'
import { Db } from "../../Db";
import "./Homeslider.css"
const HomeSlider=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return (
        <div>


        <Slider {...settings}>
          {
             Db.map((sl,index)=>{
                return <img key={index} src={sl}/> 
          })
          
        
          } 


         
        </Slider>
        </div>
      );





}

export default HomeSlider;
