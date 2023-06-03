import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./admincategory.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AdminCategoryComponent } from './AdminCategoryComponent';
import { AdminCreateCategory } from './AdminCreateCategory';
import { AdminUpdateCategory } from './AdminUpdateCategory';


export function AdminCategory (){
    const [categories, setCategories] = useState([]);
    const [categoryToUpdate, setCategoryToUpdate] = useState(null);
    const [ShowComponent, setShowComponent] = useState(false);
    const [ShowUpdate, setShowUpdate] = useState(false)
    const access_token = localStorage.getItem("tokenLogin");
    const restNum = localStorage.getItem('restNumber');
    const MySwal = withReactContent(Swal)

    const handleShowComponent = () => {
        setShowComponent(true);
    };
    
    const handleCategoryUpdate = (categoryId) => {
        setCategoryToUpdate(categoryId);
    };
    
    const updateData = () => {
        axios.get(`http://localhost:3001/api/admin/tags/${restNum}`)
        .then(res => {
            setCategories(res.data.catigories);
        })
        .catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        updateData();
    },[]);

    const handleDeleteCategory = (id) => {
        axios.delete(`http://localhost:3001/api/admin/tags/${id}`)
        .then(() => {
            setCategories(categories.filter((category) => category.id_categoria !== id));
        }).catch((err) => {
            console.log(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось удалить категорию</i>,
                icon: 'error'
            })
        });
    }

    const handleUpdateCategory  = async (newName) => {
        await axios.put(`http://localhost:3001/api/admin/tags/${categoryToUpdate}`,{
            new_name: newName,
            tocken: access_token,
        })
        .then(() => {
            setCategoryToUpdate(null);
        })
        .catch((err) => {
            console.error(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось изменить категорию</i>,
                icon: 'error'
            })
        });
        updateData();
    };

    return (
        <>
            {ShowComponent && !ShowUpdate && (
                <AdminCreateCategory/>
            )  
            }
            {
                categoryToUpdate && (
                    <AdminUpdateCategory
                    setCategoryToUpdate={setCategoryToUpdate}
                    onUpdateCategory={handleUpdateCategory}
                    setShowComponent1={setShowComponent}
                    setShowUpdate={setShowUpdate}
                    />
                ) 
            }
            {
               !categoryToUpdate && !ShowComponent && (
                    <div className="main">
                        <div className="main-container">
                            <div className="main-wrapper">
                                <div className="main-header">
                                    <span className="main-header__title">
                                        Категория
                                    </span>
                                    <button className="main-header__button" onClick={handleShowComponent}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Добавить
                                    </button>
                                </div>
                                <span> Количество категорий: {categories.length}</span>
                                <div className="table-wrapper">
                                    <table className='main-table'>
                                        <thead>
                                            <tr>
                                                <th>Наименование</th>
                                                <th className="main-table__button">Действия</th>
                                            </tr>
                                        </thead>
                                        {!categoryToUpdate &&  (
                                            <AdminCategoryComponent
                                            categories={categories}
                                            onUpdate={handleCategoryUpdate}
                                            onDelete={handleDeleteCategory}
                                            />
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