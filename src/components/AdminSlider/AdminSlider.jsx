import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AdminSliderComponent } from './AdminSliderComponent';
import { AdminCreateSlider } from './AdminCreateSlider';
import {AdminUpdateSlider} from './AdminUpdateSlider';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminSlider (){
    const [slides, setSlides] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    const [showUpdateSlider, setShowUpdateSlider] = useState(false);
    const [selectedSliderId, setSelectedSliderId] = useState(null);
    const MySwal = withReactContent(Swal)
    const access_token = localStorage.getItem("tokenLogin");
    const restNum = localStorage.getItem('restNumber');
    
    const handleShowComponent = () => {
        setShowComponent(true);
    };

    const handleEditClick = (id) => {
        setSelectedSliderId(id);
        setShowUpdateSlider(true);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/public/slides/${restNum}`)
        .then(response => {
            setSlides(response.data.slides);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:3001/api/admin/slides/delete/`,{
            data: { 
                tocken: access_token,
                id_slide: id
            },
        }).then(() => {
            setSlides(slides.filter((slide) => slide.id !== id));
        }).catch((err) => {
            console.log(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось удалить слайд</i>,
                icon: 'error'
            })
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
                        <AdminComponent>
                            <div className="main-header">
                                <span className="main-header__title">
                                    Слайдер
                                </span>
                                <div className='main-button-wrapper'>
                                    <button className="main-header__button" onClick={handleShowComponent}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Добавить
                                    </button>
                                    <button className="main-header__button" onClick={() => handleEditClick(slides.id)}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Изменить
                                    </button>
                                </div>
                            </div>
                            <span> Количество слайдов: {slides.length}</span>
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
                        </AdminComponent>
                        )
                    }    
                </>
            )}
        </>
    );
};