import React, { useState } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminSlider } from './AdminSlider';

export function AdminCreateSlider(){
    const [ShowComponent, setShowComponent] = useState(false);
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("tokenLogin");

    const handleSubmit  = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append("img", file);
        formData.append("tocken", token);
        await axios.post("http://localhost:3001/api/admin/slides/create/", formData)
        .then(res => { 
            setShowComponent(true); 
        })
        .catch (error => {
          alert("Недопустимое расширение файлов")
          console.error(error); 
        });
 
      };
      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };

    const handleClick = () => {
        setShowComponent(true);
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
                                        Создание
                                    </span>
                                    <button className="main-header__button" type="submit">
                                        <span><BiCheck/></span>
                                        Сохранить
                                    </button>
                                </div>
                                <div className="table-wrapper">
                                    <form className='main-form' > 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Картинка</span>
                                            <input type="file" onChange={handleFileChange} className="main-form__input"/>
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