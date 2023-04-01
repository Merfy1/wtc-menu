import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminCategoryComponent ({category, onDelete}){
    const handleDelete = () => {
        onDelete(category.id_categoria);
      }
    return (
        <>
            <td colSpan="2">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{category.name}</td>
                    <div className="main-table__button">
                        <button> 
                            <button>
                                <BsPencil className='icon'></BsPencil>
                            </button>
                            <button onClick={handleDelete}>
                                <BsTrash className='icon'/>
                            </button>
                        </button>
                    </div>
                </tr>
            </tbody>
        </>
    );
};