import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { Menucategories } from "../MenuCategories/Menucategories";

import './menuFooter.css'

export function MenuFooter() {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="one">
                        <img src="img/WTC-Logo 1.png" alt="Logo" className="logo"/>
                        <nav className="navbar">
                            <ul className="navbar-ul">
                            {/* {catigories?.map((category) =>
                                <Menucategories key={category.id} name={category.name} />
                            )} */}
                            </ul>
                        </nav>
                    </div>
                    <div className="two">
                        <span className="address">Центр международной торговли  Москвы 123610, <br/> Россия, Москва, Краснопресненская наб.,12</span>
                    </div>
                </div>
            </div>
        </div>
    )
}