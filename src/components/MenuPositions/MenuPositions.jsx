import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";
import { MenuPosition } from "../MenuPosition/MenuPosition";
import { Modal } from "../Modal/Modal";
import axios, {isCancel, AxiosError} from 'axios';
import './menuPositions.css'

export function MenuPositions() {
    const [modalActive, setModalActive] = useState(false)
    const [positions, statePosition] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/public/positions/1', {
        }).then((e) => {
            statePosition(e.data.positions)
            console.log(e.data)
        })
    },
    [],
    )
    return (
        <div className="popular">
            <div className="container">
                <div className="popular-wrapper">
                    <div className="title-wrapper">
                        <span className="title">Популярное</span>
                        <input placeholder="Поиск..." type="text" className="search"/>
                    </div>
                    <div className="cards">
                        {positions?.map((positions) =>
                            <MenuPosition key={positions.id} ingridint={positions.ingridint} name={positions.name} price={positions.price} img={positions.img[0]?.patch} img1={positions.img[1]?.patch}/>
                        )}
                    </div>
                </div>
            </div>
           
        </div>
    )
}