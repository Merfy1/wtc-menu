import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { Modal } from "../Modal/Modal";
import './menuPositions.css'

export function MenuPositions() {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className="popular">
            <div className="container">
                <div className="popular-wrapper">
                    <div className="title-wrapper">
                        <span className="title">Популярное</span>
                        <input placeholder="Поиск..." type="text" className="search"/>
                    </div>
                    <div className="cards" data-modal>
                        <div className="card" >
                            <img src="img/food1 1.png" alt="" className="card-img"/>
                            <span className="card-title">Стейк Рибай</span>
                            <span className="card-price"> 1200 руб / 250 гр</span>
                            <button onClick={() => setModalActive(true)} className="card-buy" >В корзину</button>
                        </div>
                        <div className="card" >
                            <img src="img/food1 1.png" alt="" className="card-img"/>
                            <span className="card-title">Стейк Рибай</span>
                            <span className="card-price"> 1200 руб / 250 гр</span>
                            <button onClick={() => setModalActive(true)} className="card-buy" >В корзину</button>
                        </div>
                        <div className="card" >
                            <img src="img/food1 1.png" alt="" className="card-img"/>
                            <span className="card-title">Стейк Рибай</span>
                            <span className="card-price"> 1200 руб / 250 гр</span>
                            <button onClick={() => setModalActive(true)} className="card-buy" >В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div class="modal__close" data-close>&times;</div>
                <div class="modal-img">
                    <img src="img/Tom.png" alt="tom"/>
                </div>
                <div class="modal-info">
                    <div class="position-info">
                        <span class="modal-title">Грин Том ям</span>
                        <span class="modal-subtitle">Шампиньоны, мини-кукуруза, горох <br/> стручковый, кокосовое молоко, <br/> лемонграсс, паста «том ям», зелень <br/> (подается с рисом)</span>
                        <span class="modal-subtitle">200 руб</span>
                    </div>
                    <div class="position-buy">
                        <div class="plus-minus">
                            <button class="btn-count">
                                <img src="img/minuus.svg" alt=""/>
                            </button>
                            <span class="count">1</span>
                            <button class="btn-count">
                                <img src="img/plus.svg" alt=""/>
                            </button>
                        </div>
                        <div class="buy-basket">
                            <button class="buy-position">В корзину</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}