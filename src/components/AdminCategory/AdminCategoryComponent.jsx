import { BsPencil,  BsTrash } from 'react-icons/bs';
import React from 'react';

export function AdminCategoryComponent ({categories, onDelete, onUpdate}){

    const handleDelete = (category) => {
        onDelete(category.id_categoria);
    }
    return (
        <>
            <td colSpan="2">
                <div className='line'/>
            </td>
            <tbody>
                    {categories.map((category) => (
                        <tr>
                            <td>{category.name}</td>
                            <div className="main-table__button">
                                <button> 
                                    <button onClick={() => onUpdate(category.id_categoria)}>
                                        <BsPencil className='icon'></BsPencil>
                                    </button>
                                    <button onClick={() => {handleDelete(category)}}>
                                        <BsTrash className='icon'/>
                                    </button>
                                </button>
                            </div>
                        </tr>
                    ))}
            </tbody>
        </>
    );
};