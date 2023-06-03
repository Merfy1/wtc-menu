import { BsPencil,  BsTrash } from 'react-icons/bs';
import React from 'react';

export function AdminRestaurantComponent ({rests, onDelete, onUpdateRest}){
    const handleDelete = () => {
        onDelete(rests.id);
    }
    return (
        <>
            <td colSpan="4">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{rests.name}</td>
                    <td>{rests.address}</td>
                    <td>{rests.email}</td>
                    <div className="main-table__button">
                        <button> 
                            <button onClick={() => onUpdateRest(rests.id)}>
                                <BsPencil className='icon'></BsPencil>
                            </button>
                            <button onClick={(e) => {handleDelete(rests)}} >
                                <BsTrash className='icon'/>
                            </button>
                        </button>
                    </div>
                </tr>
            </tbody>
        </>
    );
};