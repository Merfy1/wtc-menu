import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminPositionComponent({name, price, categories, ingridint, catigories}){

    let nameCategories = ""


    for (let i = 0; i < catigories.length; i++) {
        if (catigories[i].id_categoria == categories){
            nameCategories = catigories[i].name
        }
    }

    return (
        <>
            <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{price + 'руб'}</td>
                    <td>{nameCategories}</td>
                    <td>{ingridint}</td>
                    <div className="main-table__button">
                        <button>
                            <BsPencil className='icon'></BsPencil>
                            <BsTrash className='icon'/>
                        </button>
                    </div>
                </tr>
            </tbody>
        </>
    );
};