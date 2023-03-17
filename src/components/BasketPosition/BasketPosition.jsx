

export function BasketPosition({name, price}) {
    return (
        <div className="modal-basket__position">
            <img src="img/Tom-mini.png" alt=""/>
            <div className="modal-basket__position-info">
                <span className="position-name">{name}</span>
                <span className="position-price">{price}</span>
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
    )
}