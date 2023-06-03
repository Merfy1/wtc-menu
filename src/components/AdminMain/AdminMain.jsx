import React from 'react';
import "../AdminCategory/admincategory.css"
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminMain (){
    return (
        <>
            <AdminComponent>
                <div className="main-header">
                    <span className="main-header__title">
                        Выберите таблицу
                    </span>
                </div>
            </AdminComponent>
        </>
    );
};