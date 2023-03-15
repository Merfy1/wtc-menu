import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { BsBasket } from "react-icons/bs";
import './menuHeader.css'

export function MenuHeader() {
    return(
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
                    <button className="basket-icon"><BsBasket></BsBasket></button>
                </div>
            </div>         
        </div>   
    )
}