import React, { useState, useEffect } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { BsBasket } from "react-icons/bs";
import { ModalBasket } from "../ModalBasket/ModalBasket";
import './menuHeader.css'
import { Menucategories } from "../MenuCategories/Menucategories";

export function MenuHeader() {
    const [modalActive, setModalActive] = useState(false)
    const [catigories, stateCatigories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/public/categories', {
        }).then((e) => {
            stateCatigories(e.data.catigories)
            console.log(e.data)
        })
    },
    [],
    )
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <img src="/img/WTC-Logo 1.png" alt="Logo" className="logo"/>
                    <nav className="navbar">
                        <ul className="navbar-ul">
                        {catigories?.map((catigories) =>
                            <Menucategories key={catigories.id} name={catigories.name} />
                        )}
                        </ul>
                    </nav>
                    <button onClick={() => setModalActive(true)} className="basket-icon"><BsBasket></BsBasket></button>
                </div>
            </div>         
        </div>   
        <ModalBasket active={modalActive} setActive={setModalActive}>
            <div className="modal__close" data-close>&times;</div>
            <span className="modal-basket__title">Корзина</span>
            <hr className="line"/>
            <div className="modal-basket__position">
                <img src="img/Tom-mini.png" alt=""/>
                <div className="modal-basket__position-info">
                    <span className="position-name">Грин Том ям</span>
                    <span className="position-price">390 Р</span>
                </div>
                <div className="modal__position-buy">
                    <div className="plus-minus-basket">
                        <button className="btn-count-basket">
                            <img src="img/minus-mini.svg" alt=""/>
                        </button>
                        <span className="count-basket">1</span>
                        <button className="btn-count-basket">
                            <img src="img/plus-mini.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-basket__position">
                <img src="img/Tom-mini.png" alt=""/>
                <div className="modal-basket__position-info">
                    <span className="position-name">Грин Том ям</span>
                    <span className="position-price">390 Р</span>
                </div>
                <div className="modal__position-buy">
                    <div className="plus-minus-basket">
                        <button className="btn-count-basket">
                            <img src="img/minus-mini.svg" alt=""/>
                        </button>
                        <span className="count-basket">1</span>
                        <button className="btn-count-basket">
                            <img src="img/plus-mini.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-basket__position">
                <img src="img/Tom-mini.png" alt=""/>
                <div className="modal-basket__position-info">
                    <span className="position-name">Грин Том ям</span>
                    <span className="position-price">390 Р</span>
                </div>
                <div className="modal__position-buy">
                    <div className="plus-minus-basket">
                        <button className="btn-count-basket">
                            <img src="img/minus-mini.svg" alt=""/>
                        </button>
                        <span className="count-basket">1</span>
                        <button className="btn-count-basket">
                            <img src="img/plus-mini.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="modal-basket__change-pay">
                <span className="change-pay__title">Выберите способ оплаты</span>
                <label> 
                    <input type='radio' className="radio-modal">
                    </input>
                    Картой
                </label>
                <label> 
                    <input type='radio' className="radio-modal" >
                    </input>
                    Наличными
                </label>
            </div>
            <hr className="line"/>
            <div className="buy-basket">
                <button className="modal-basket__button-buy">Продолжить (1170 руб)</button>
            </div>
        </ModalBasket>
        </>    
    )
}