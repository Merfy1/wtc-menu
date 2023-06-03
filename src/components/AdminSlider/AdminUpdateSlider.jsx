import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminSlider } from './AdminSlider';
import { AdminSliderComponent } from './AdminSliderComponent';

export function AdminUpdateSlider({sliderId, onClose}){
    const [ShowComponent, setShowComponent] = useState(false);
    const [allSlides, setAllSlides] = useState([]);
    const [slides, setSlides] = useState([]);
    const [title, setTitle] = useState("");
    const access_token = localStorage.getItem("tokenLogin");
    const restNum = localStorage.getItem('restNumber');
    const MySwal = withReactContent(Swal)
    const headers = {
        Authorization: access_token,
    };

    const updateData = () => {
        axios.get(`http://localhost:3001/api/admin/slides/${restNum}`, {headers})
        .then(res => {
            setAllSlides(res.data.date);
        })
        .catch(error => {
            console.error(error);
        });
    } 

    useEffect(() => {
        updateData();
    },[]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/public/slides/`)
        .then((response) => {
            setTitle(response.data.title);
        });
    },[sliderId]);
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleClick = () => {
        setShowComponent(true);
    };

    const handleSubmit = async (event, id) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3001/api/admin/slides/update/`,{     
                id_slide: title,
                tocken: access_token
            },)
            .then((res) => {
                setSlides(res.data.slides);
                onClose();

            })
        } 
        catch (error) {
            console.error(error); 
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось изменить слайд</i>,
                icon: 'error'
            })
        }
        updateData();
      };

    const handleDeleteUser = (event, id) => {
        event.preventDefault();
        axios.delete(`http://localhost:3001/api/admin/slides/delete/`,{
            data: { 
                tocken: access_token,
                id_slide: id
            },
        })
        .then(() => {
            setSlides(slides.filter((slide) => slide.id !== id));
        })
        .catch((err) => {
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
            {ShowComponent ? (
                <AdminSlider/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <button className="main-header__back" onClick={handleClick}>
                                <BiArrowBack/> Назад
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="main-header">
                                    <span className="main-header__title">
                                        Изменить
                                    </span>
                                    <button className="main-header__button" type="submit">
                                        <span><BiCheck/></span>
                                        Сохранить
                                    </button>
                                </div>
                                <span>Введите номер слайда который хотите скрыть/показать</span>
                                <div className="table-wrapper">
                                    <form className='main-form' > 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Номер слайда</span>
                                            <input type="text" className="main-form__input" id="title"
                                            value={title}
                                            onChange={handleTitleChange}/>
                                        </div>
                                        <table className='main-table'>
                                        <thead>
                                            <tr>
                                                <th>Номер слайда</th>
                                                <th>Скрыт</th>
                                                <th>Дата создания</th>
                                                <th className="main-table__button">Действия</th>
                                            </tr>
                                        </thead>
                                        {allSlides?.map((slide) => (
                                            <AdminSliderComponent 
                                                key={slide.id_slide} slide={slide} onDelete={handleDeleteUser}  
                                            />
                                        ))}
                                    </table>
                                    </form>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div> 
                )
            } 
        </>
    );
};