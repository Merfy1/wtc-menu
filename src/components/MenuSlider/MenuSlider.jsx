import React, { useState } from "react";
import './menuSlider.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export function MenuSlider() {
    return (
        <div className="slider">
            <div className="slider-container">
                <div className="slider-wrapper">
                        <button className="button-nav">
                            <FiArrowLeftCircle className="arrow-left"></FiArrowLeftCircle>
                        </button>
                        <img src="img/slider 1.png" alt="" className="slider-image"/>
                        <button className="button-nav">
                            <FiArrowRightCircle  className="arrow-right"></FiArrowRightCircle>
                        </button>
                </div>
                <div className="slider-wrapper nav">
                    <img src="img/slider-nav-active.svg" alt="" className="slider-nav"/>
                    <img src="img/slider-nav.svg" alt="" className="slider-nav"/>
                    <img src="img/slider-nav.svg" alt="" className="slider-nav"/>
                    <img src="img/slider-nav.svg" alt="" className="slider-nav"/>
                    <img src="img/slider-nav.svg" alt="" className="slider-nav"/>
                    <img src="img/slider-nav.svg" alt="" className="slider-nav"/>
                </div>
            </div>
        </div>
    )
}