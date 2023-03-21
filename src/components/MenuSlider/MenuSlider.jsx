
import './menuSlider.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "../Slider/Slider";
import React, { useState, useEffect, useMemo } from "react";
import axios, {isCancel, AxiosError} from 'axios';

export function MenuSlider() {
    // const images = [
    //     "img/slider1.png",
    //     "img/slider2.png",
    //     "img/slider3.png",
    //     "img/slider4.png",
    //     "img/slider5.png",
    //     "img/slider6.png",
    //   ];
    const [slide, setSlide] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/public/slides', {
        }).then((e) => {
            setSlide(e.data.slides)
        })
    },
    [],
    )
    return (
        <div className="slider">
            <div className="slider-container">
                <Slider images={slide} />
            </div>
        </div>
    )
}