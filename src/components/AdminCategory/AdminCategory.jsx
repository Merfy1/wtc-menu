import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "./admincategory.css"
import { AdminCategoryComponent } from '../AdminCategoryComponent/AdminCategoryComponent';
import { AdminCreateCategory } from '../AdminCreateCategory/AdminCreateCategory';


export function AdminCategory (){
    const [catigories, setCategories] = useState([]);
    const [ShowAdminCreate, setShowAdminCreate] = useState(false);

    const handleClick = () => {
        setShowAdminCreate(true);
    };
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/tags/')
        .then(res => {
            setCategories(res.data.catigories);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    const handleDeleteCategory = (id) => {
      axios.delete(`http://localhost:3001/api/admin/tags/${id}`).then(() => {
        setCategories(catigories.filter((category) => category.id_categoria !== id));
      }).catch((err) => {
        console.log(err);
        alert("Не удалось удалить категорию");
      });
    }
    return (
        <>
            {ShowAdminCreate ? (
                <AdminCreateCategory/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <div className="main-header">
                                <span className="main-header__title">
                                    Категория
                                </span>
                                <button className="main-header__button" onClick={handleClick}>
                                    <img src="img/plus-mini.svg" alt=""/>
                                    Добавить
                                </button>
                            </div>
                            <div className="table-wrapper">
                                <table className='main-table'>
                                    <thead>
                                        <tr>
                                            <th>Наименование</th>
                                            <th className="main-table__button">Действия</th>
                                        </tr>
                                    </thead>
                                    {catigories?.map((category) =>
                                        <AdminCategoryComponent             
                                            key={category.id_categoria}
                                            category={category}
                                            onDelete={handleDeleteCategory} />
                                        )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>  
            )
            }    
        </>
    );
};