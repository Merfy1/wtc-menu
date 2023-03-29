import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminPositionComponent({name, price, categories, ingridint}){
    return (
        <>
            <td colspan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{price + 'руб'}</td>
                    <td>{categories}</td>
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