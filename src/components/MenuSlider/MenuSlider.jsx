import React, { useState } from "react";
import './menuSlider.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "../Slider/Slider";

export function MenuSlider() {
    const images = [
        "img/slider1.png",
        "img/slider2.png",
        "img/slider3.png",
        "img/slider4.png",
        "img/slider5.png",
        "img/slider6.png",
      ];
    return (
        <div className="slider">
            <div className="slider-container">
                <Slider images={images} />
            </div>
        </div>
    )
}