import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminSliderComponent } from './AdminSliderComponent';
import { AdminCreateSlider } from './AdminCreateSlider';
import {AdminUpdateSlider} from './AdminUpdateSlider';

export function AdminSlider (){
    const [slides, setSlides] = useState([]);
    const [countSlide, setCountSlide] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    const [showUpdateSlider, setShowUpdateSlider] = useState(false);
    const [selectedSliderId, setSelectedSliderId] = useState(null);

    
    const handleClick = () => {
        setShowComponent(true);
    };

    const handleEditClick = (id) => {
        setSelectedSliderId(id);
        setShowUpdateSlider(true);
    };

    useEffect(() => {
        axios.get('http://45.12.237.227:3001/api/public/slides')
          .then(response => {
            setSlides(response.data.slides);
            setCountSlide(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const handleDeleteUser = (id) => {
      axios.delete(`http://45.12.237.227:3001/api/admin/slides/delete/`,{
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
        {showUpdateSlider ? (
            <AdminUpdateSlider
            sliderId={selectedSliderId}
            onClose={() => setShowUpdateSlider(false)}
            />
        ) : (
        <>
            {ShowComponent ? (
                <AdminCreateSlider/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <div className="main-header">
                                <span className="main-header__title">
                                    Слайдер
                                </span>
                                <div className='main-button-wrapper'>
                                    <button className="main-header__button" onClick={handleClick}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Добавить
                                    </button>
                                    <button className="main-header__button" onClick={() => handleEditClick(slides.id)}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Изменить
                                    </button>
                                </div>

                            </div>
                            <span> Количество слайдов: {countSlide.countSlides}</span>
                            <div className="table-wrapper">
                                <table className='main-table'>
                                    <thead>
                                        <tr>
                                            <th>Номер слайда</th>
                                            <th>Скрыт</th>
                                            <th>Дата создания</th>
                                            <th className="main-table__button">Действия</th>
                                        </tr>
                                    </thead>
                                    {slides?.map((slide) =>
                                        <AdminSliderComponent onEdit={() => handleEditClick(slide.id)} key={slide.id_slide} slide={slide} onDelete={handleDeleteUser}/>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div> 
                )
            }    
        </>
        )}
    </>
    );
};