import React from "react";
import './modalBasket.css'

export function ModalBasket({active, setActive, children}) {
    return(
        <div className={active ? "modal-basket active" : "modal-basket"} onClick={() => setActive(false)}>
            <div className="modal-basket__dialog">
                <div className={active ? "modal-basket__content active" : "modal-basket__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}