import { BsPencil,  BsTrash } from 'react-icons/bs';
import React from 'react';

export function AdminRestaurantComponent (){
    return (
        <>
            <td colSpan="2">
                <div className='line'/>
            </td>
            <tbody>
                    {catigories.map((category) => (
                        <tr>
                            <td>{category.name}</td>
                            <div className="main-table__button">
                                <button> 
                                    <button onClick={() => onUpdateCategory(category.id_categoria)}>
                                        <BsPencil className='icon'></BsPencil>
                                    </button>
                                    <button onClick={(e) => {handleDelete(category)}}>
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