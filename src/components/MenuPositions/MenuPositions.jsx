import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";
import { MenuPosition } from "../MenuPosition/MenuPosition";
import { Modal } from "../Modal/Modal";
import axios, {isCancel, AxiosError} from 'axios';
import './menuPositions.css'
import { useParams } from "react-router-dom";
import PositionsElement from "./PositionsElement";

export function MenuPositions({positionsID}) {
    const [modalActive, setModalActive] = useState(false)
    const [positions, statePosition] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const restNum = localStorage.getItem('restNumber')
    useEffect(() => {
        axios.get(`http://localhost:3001/api/public/positions/${restNum}`, {
        }).then((e) => {
            statePosition(e.data.positions)
        })
    },
    [],
    )

    useEffect(() => {
        // console.log('useEffect', positionsID[0])
    }, [positionsID]);
    const filteredCards = positions.filter((positions) =>
        positions.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        if (searchTerm.length >= 3) {
          setSearchTerm(searchTerm);
        } else {
          setSearchTerm('');
        }
      };
      
    return (
        <div className="popular">
            <div className="container">
                <div className="popular-wrapper">
                    <div className="title-wrapper">
                        <span className="title">Все товары</span>
                        <input placeholder="Поиск..." type="text" className="search" /*value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}*/ onChange={handleSearchChange}/>
                    </div>
                    <div className="cards">
                        {filteredCards?.map((positions) =>
                            <MenuPosition id_element={positions}  key={positions.id_position} ingridint={positions.ingridint} name={positions.name} price={positions.price} img={positions.img[0]?.patch}/>
                        )}
                    </div>
                </div>
            </div>
            {
                positionsID?.map((e) => <PositionsElement key={e.id_catepositionsgoria} positionsID={e.id_categoria} name={e.name} />)
            }
        </div>  
    )
}