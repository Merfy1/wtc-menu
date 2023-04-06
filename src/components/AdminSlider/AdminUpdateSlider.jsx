import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminSlider } from './AdminSlider';

export function AdminUpdateSlider({sliderId, onClose}){
    const [ShowComponent, setShowComponent] = useState(false);
    const token = localStorage.getItem("tokenLogin");
    const [slides, setSlides] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
      axios.get(`http://localhost:3001/api/public/slides/`).then((response) => {
        setTitle(response.data.title);
      });
    }, [sliderId]);
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleClick = () => {
        setShowComponent(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        await axios.put(`http://localhost:3001/api/admin/slides/update/`,{     

                id_slide: title,
                tocken: token
            },
          )
          .then((res) => {
            setSlides(res.data.slides);
            onClose();
          })
        } catch (error) {
            console.error(error); 
            alert("Не удалось изменить слайд");// выводим ошибку в консоль
        }
          axios.get('http://localhost:3001/api/public/slides/')
          .then(response => {
            setSlides(response.data.slides);
          })
          .catch(error => {
            console.log(error);
          });
      };

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
                                <span>Введите номер слайда который кхотите скрыть/показать</span>
                                <div className="table-wrapper">
                                    <form className='main-form' > 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Номер слайда</span>
                                            <input type="text" className="main-form__input" id="title"
                                            value={title}
                                            onChange={handleTitleChange}/>
                                        </div>
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