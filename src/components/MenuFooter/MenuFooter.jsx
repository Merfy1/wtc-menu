import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
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
                                <li className="navbar-list footer-item">
                                    <a href="" className="navbar-item">Популярное</a>
                                </li>
                                <li className="navbar-list footer-item">
                                    <a href="" className="navbar-item">Горячее</a>
                                </li>
                                <li className="navbar-list footer-item">
                                    <a href="" className="navbar-item">Салаты</a>
                                </li>
                                <li className="navbar-list footer-item">
                                    <a href="" className="navbar-item">Супы</a>
                                </li>
                                <li className="navbar-list footer-item">
                                    <a href="" className="navbar-item">Напитки</a>
                                </li>
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