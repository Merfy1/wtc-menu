import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminSlider } from './AdminSlider';

export function AdminCreateSlider(){
    const [ShowComponent, setShowComponent] = useState(false);
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("tokenLogin");

    // const handleCreateCategory = async () => {
    //     const token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage
    //     try {
    //       const response = await axios.post('http://localhost:3001/api/admin/tags/',
    //         {
    //           name: categoryName,
    //           token: token,
    //         }
    //       );
    //       console.log(response.data); // выводим ответ сервера в консоль
    //     } catch (error) {
    //       console.error(error); // выводим ошибку в консоль
    //     }
    //     setShowComponent(true);
    // };

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append("img", file);
        formData.append("tocken", token);

        axios.post("http://localhost:3001/api/admin/slides/create/", formData)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
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
                                <form className='main-form' onSubmit={handleSubmit}> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Картинка</span>
                                        <input type="file" onChange={handleFileChange} className="main-form__input"/>
                                    </div>
                                    <button type="submit">Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                )
            } 
        </>
    );
};