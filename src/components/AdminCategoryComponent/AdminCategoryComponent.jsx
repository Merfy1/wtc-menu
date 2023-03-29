import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminCategoryComponent ({name}){
    return (
        <>
            <td colspan="2">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{name}</td>
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