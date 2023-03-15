import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { BsBasket } from "react-icons/bs";
import { Modal } from "../Modal/Modal";
import './menuHeader.css'

export function MenuHeader() {
    const [modalActive, setModalActive] = useState(true)
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <img src="/img/WTC-Logo 1.png" alt="Logo" className="logo"/>
                    <nav className="navbar">
                        <ul className="navbar-ul">
                            <li className="navbar-list">
                                <a href="" className="navbar-item">Популярное</a>
                            </li>
                            <li class="navbar-list">
                                <a href="" className="navbar-item">Горячее</a>
                            </li>
                            <li class="navbar-list">
                                <a href="" className="navbar-item">Салаты</a>
                            </li>
                            <li class="navbar-list">
                                <a href="" className="navbar-item">Супы</a>
                            </li>
                            <li class="navbar-list">
                                <a href="" className="navbar-item">Напитки</a>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => setModalActive(true)} className="basket-icon"><BsBasket></BsBasket></button>
                </div>
            </div>         
        </div>   
        <Modal active={modalActive} setActive={setModalActive}>
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
        </Modal>
        {/* <Modal active={modalActive} setActive={setModalActive}>

                
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
                    <p><input className="radio-modal" type="radio">Картой</input></p>
                    <p><input className="radio-modal" type="radio">Наличными</input></p>
                </div>
                <hr className="line"/>
                <div className="buy-basket">
                    <button className="modal-basket__button-buy">Продолжить (1170 руб)</button>
                </div>
            </Modal> */}
        </>    
    )
}