import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "../AdminCategory/admincategory.css"


export function AdminMain (){
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Выберите таблицу
                            </span>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};