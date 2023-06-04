import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminSlider } from './AdminSlider';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminCreateSlider(){
    const [ShowComponent, setShowComponent] = useState(false);
    const [file, setFile] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const restNum = localStorage.getItem('restNumber');
    const access_token = localStorage.getItem("tokenLogin");
    const MySwal = withReactContent(Swal)
    const headers = {
        Authorization: access_token,
    };

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", file);
        formData.append("tocken", access_token);
        formData.append("id_restoran", restNum)
        await axios.post("http://localhost:3001/api/admin/slides/create/", formData)
        .then(res => { 
            setShowComponent(true); 
        })
        .catch (err => {
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Недопустимое расширение файла</i>,
                icon: 'error'
            })
            console.error(err); 
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/restoran/`, {headers})
        .then((response ) => {
            setRestaurants(response.data)
        })
        .catch(error => {
            console.error(error);
        });
    },[],)

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
                <AdminComponent>
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
                </AdminComponent>
                )
            } 
        </>
    );
};