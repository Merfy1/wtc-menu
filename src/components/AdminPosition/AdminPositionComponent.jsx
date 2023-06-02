import React, {useState} from 'react';
import axios from 'axios';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import { AiOutlineFileImage } from 'react-icons/ai';
import { ModalBasket } from "../ModalBasket/ModalBasket";

export function AdminPositionComponent({position, name, price, categories, ingridint, catigories, onDelete, id}){
    const [modalActive, setModalActive] = useState(false)
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("tokenLogin");
    let nameCategories = ""

    const handleDelete = () => {
        onDelete(position.id_position);
    }
    const handleSubmit  = async (e) => {
        e.preventDefault();
        const formData = new FormData();    
        formData.append("img", file);
        formData.append("token", token);

        await axios.post(`http://localhost:3001/api/admin/positions/${id}/img`, formData)
        .then(res => {
            console.log(res.data)
        })
        .catch (error => {
          alert("Недопустимое расширение файлов")
          console.error(error); 
        });
        setModalActive(false)
    };
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
    for (let i = 0; i < catigories.length; i++) {
        if (catigories[i].id_categoria === categories){
            nameCategories = catigories[i].name
        }
    }

    return (
        <>
            <>
                <tbody>
                    <td colSpan="5">
                        <div className='line'/>
                    </td>
                    <tr>
                        <td>{name}</td>
                        <td>{price + ' руб'}</td>
                        <td>{nameCategories}</td>
                        <td>{ingridint}</td>
                        <div className="main-table__button">
                            <button>
                                <button onClick={() => setModalActive(true)}>
                                    <AiOutlineFileImage className='icon'></AiOutlineFileImage>
                                </button>
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
            <>
            <ModalBasket active={modalActive} setActive={setModalActive}>
                <form className="modal-info photo" onSubmit={handleSubmit}>
                    <h3 className="modal-title photo">Добавить фото</h3>
                    <input type="file" onChange={handleFileChange}/>
                    <button className="buy-position photo">Загрузить</button>
                </form>
            </ModalBasket>
            </>
        </>
    );
};