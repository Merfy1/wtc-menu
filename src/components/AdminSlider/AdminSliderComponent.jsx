import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminSliderComponent ({slide, onDelete}) {
    var date = new Date(slide.date_create);
    let infoStatus = slide.hidden ? "Да" : "Нет";

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
                    <td>{infoStatus}</td>
                    <td>{date.toLocaleString()}</td>
                    <div className="main-table__button">
                        <button>
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
