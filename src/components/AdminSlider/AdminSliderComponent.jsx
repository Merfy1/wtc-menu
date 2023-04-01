import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminSliderComponent ({slide, onDelete}) {
    const handleDelete = () => {
        onDelete(slide.id);
      }
    return (
        <>
            <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{slide.id}</td>    
                    <td>{slide.hidden.toString()}</td>
                    <td>{slide.date_create}</td>
                    <div className="main-table__button">
                        <button>
                            <button >
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
