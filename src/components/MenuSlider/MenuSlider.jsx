
import './menuSlider.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "../Slider/Slider";
import React, { useState, useEffect, useMemo } from "react";
import axios, {isCancel, AxiosError} from 'axios';

export function MenuSlider() {
    const [slide, setSlide] = useState([])
    useEffect(() => {
        axios.get('http://45.12.237.227:3001/api/public/slides', {
        }).then((e) => {
            setSlide(e.data.slides)
        })
    },
    [],
    )
    return (
            <div className="slider-container">
                <Slider images={slide} />
            </div>
    )
}