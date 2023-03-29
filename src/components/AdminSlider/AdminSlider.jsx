import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminSliderComponent } from '../AdminSliderComponent/AdminSliderComponent';

export function AdminSlider (){
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/public/slides')
          .then(response => {
            setSlides(response.data.slides);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Слайдер
                            </span>
                            <button className="main-header__button">
                                <img src="img/plus-mini.svg" alt=""/>
                                Добавить
                            </button>
                        </div>
                        <div class="table-wrapper">
                            <table className='main-table'>
                                <thead>
                                    <tr>
                                        <th>Номер слайда</th>
                                        <th>Показ</th>
                                        <th>Дата создания</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                {slides?.map((slide) =>
                                    <AdminSliderComponent key={slide.id} id={slide.id} hidden={slide.hidden.toString()} date_create={slide.date_create}/>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};