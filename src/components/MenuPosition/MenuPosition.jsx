import { useState } from "react"
import { Modal } from "../Modal/Modal";

export function MenuPosition({name, price, img, ingridint}) {
    const [modalActive, setModalActive] = useState(false)
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={"http://localhost:3001"+img} alt="" className="card-img"/>
                <span className="card-title">{name}</span>
                <span className="card-price">{price + " руб"}</span>
                <button onClick={() => setModalActive(true)} className="card-buy">В корзину</button>
            </div>
        </div>
         <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal-img">
                    <img  src={"http://localhost:3001"+img} alt="tom" className="img-for-modal"/>
                </div>
                <div className="modal-info">
                    <div className="position-info">
                        <span className="modal-title">{name}</span>
                        <span className="modal-subtitle">{ingridint}</span>
                        <span className="modal-title">{price+" руб"}</span>
                    </div>
                    <div className="position-buy">
                        <div className="plus-minus">
                            <button className="btn-count">
                                <img src="img/minuus.svg" alt=""/>
                            </button>
                            <span className="count">1</span>
                            <button className="btn-count">
                                <img src="img/plus.svg" alt=""/>
                            </button>
                        </div>
                        <div className="buy-basket">
                            <button className="buy-position">В корзину</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </> 
    )
}