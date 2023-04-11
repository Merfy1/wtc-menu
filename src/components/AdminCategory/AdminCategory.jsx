import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "./admincategory.css"
import { AdminCategoryComponent } from './AdminCategoryComponent';
import { AdminCreateCategory } from './AdminCreateCategory';
import { AdminUpdateCategory } from './AdminUpdateCategory';


export function AdminCategory (){
    const [catigories, setCategories] = useState([]);
    const [categoryToUpdate, setCategoryToUpdate] = useState(null);
    const [ShowComponent, setShowComponent] = useState(false);
    const [ShowUpdate, setShowUpdate] = useState(false)

    const handleUpdateCategory = (categoryId) => {
        setCategoryToUpdate(categoryId);
    };

    const handleClick = () => {
        setShowComponent(true);
    };

    useEffect(() => {
        axios.get('http://45.12.237.227:3001/api/admin/tags/')
        .then(res => {
            setCategories(res.data.catigories);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleDeleteCategory = (id) => {
      axios.delete(`http://45.12.237.227:3001/api/admin/tags/${id}`).then(() => {
        setCategories(catigories.filter((category) => category.id_categoria !== id));
      }).catch((err) => {
        console.log(err);
        alert("Не удалось удалить категорию");
      });
    }

    const handleCategoryUpdate  = async (newName) => {
        const tocken = localStorage.getItem("tokenLogin");
        try {
        const response = await axios.put(`http://45.12.237.227:3001/api/admin/tags/${categoryToUpdate}`,{
            new_name: newName,
            tocken: tocken,
          })
          .then((res) => {
            setCategoryToUpdate(null);
          })
        } catch (error) {
            console.error(error); // выводим ошибку в консоль
        }

        axios.get('http://45.12.237.227:3001/api/admin/tags/')
        .then(res => {
            setCategories(res.data.catigories);
        })
        .catch(error => {
            console.error(error);
        });
    };


    let useRenderListCategories = true

    useEffect(() => {
        if (!categoryToUpdate & !ShowComponent){
            useRenderListCategories = false
            console.log('Я сейчас не показываюсь')
        }   else {
            useRenderListCategories = true            
        }
    }, [categoryToUpdate, ShowComponent]);

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
                    categoryId={categoryToUpdate}
                    onUpdateCategory={handleCategoryUpdate}
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
                                    <button className="main-header__button" onClick={handleClick}>
                                        <img src="img/plus-mini.svg" alt=""/>
                                        Добавить
                                    </button>
                                </div>
                                <span> Количество категорий: {catigories.length}</span>
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
                                            catigories={catigories}
                                            onUpdateCategory={handleUpdateCategory}
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