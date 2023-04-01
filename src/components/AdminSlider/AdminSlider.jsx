import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminSliderComponent } from './AdminSliderComponent';

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
    const handleDeleteUser = (id) => {
      axios.delete(`http://localhost:3001/api/admin/slides/delete/`,{
        data: { tocken: localStorage.getItem("tokenLogin"),
                id_slide: id
              },
      }).then(() => {
        setSlides(slides.filter((slide) => slide.id !== id));
      }).catch((err) => {
        console.log(err);
        alert("Не удалось удалить пользователя");
      });
    } 
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
                        <div className="table-wrapper">
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
                                    <AdminSliderComponent key={slide.id_slide} slide={slide} onDelete={handleDeleteUser}/>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};