import { BsTrash } from 'react-icons/bs';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { useState } from 'react';
import { AdminOrderMore } from './AdminOrderMore';
import { useEffect } from 'react';

export function AdminOrderComponent ({onDelete, id_order, time, status, table, onEdit, order, onHidden, onHiddenSet}) {
    const [ShowComponent, setShowComponent] = useState(false);
    var date = new Date(time);
    useEffect(() => {
        console.log(Boolean(status))
    }, [status]);
    
    const handleClick = () => {
        setShowComponent(true);
        onHiddenSet(false)
    };

    const handleDelete = () => {
        onDelete(id_order);
    }
    return (
        <>
            {ShowComponent ? (
                <AdminOrderMore id_order={id_order} setShowComponent1={setShowComponent} onHidden={onHidden} onHiddenSet={onHiddenSet}/>
            ) : (
                <>  
                    {onHidden && (
                        <>
                            <td colSpan="5">
                                <div className='line'/>
                            </td>
                            <tbody>
                                <tr>
                                    <td>{id_order}</td>
                                    <td>{date.toLocaleString()}</td>
                                    <td>{status == "true" ? "Да" : "Нет"}</td>
                                    <td>{table}</td>
                                    <div className="main-table__button">
                                        <button>
                                            <button onClick={() => handleClick(id_order)} >
                                                <CiCircleMore className='icon'></CiCircleMore>
                                            </button>
                                            <button onClick={onEdit}>
                                                <AiOutlineCloseCircle className='icon'></AiOutlineCloseCircle>
                                            </button>
                                            <button onClick={handleDelete}>
                                                <BsTrash className='icon'/>
                                            </button>
                                        </button>
                                    </div>
                                </tr>
                            </tbody>
                        </>
                    )}  
                </>
            )}
        </>
    );
};