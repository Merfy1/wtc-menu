import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function AdminOrderMoreComponent ({order}){
    const [catigories, setCatigories] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    let nameCategories = ""
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/tags/')
        .then(response => {
          setCatigories(response.data.catigories);
        })  
        .catch(error => {
          console.error(error);
        });
    }, []);

    for (let i = 0; i < catigories.length; i++) {
        if (catigories[i].id_categoria == order?.categories){
            nameCategories = catigories[i].name
        }
    }

    const handleClick = () => {
        setShowComponent(true);
    };
    return (
        <>
            <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{order?.name}</td>
                    <td>{order?.price}</td>
                    <td>{nameCategories}</td>
                    <td>{order?.ingridint}</td>
                    <div className="main-table__button more">
                    </div>
                </tr>
            </tbody>
        </>
    );
};
