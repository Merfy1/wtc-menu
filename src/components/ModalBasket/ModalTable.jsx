import React from "react";
import './modalBasket.css'

export function ModalTable({active, setActive, children}) {
    return(
        <div className={active ? "modal-basket active" : "modal-basket"} >
            <div className="modal-basket__dialog">
                <div className={active ? "modal-basket__content active" : "modal-basket__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}