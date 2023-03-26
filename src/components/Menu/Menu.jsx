import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { AiFillMail, AiFillLock, AiOutlineClose } from "react-icons/ai";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { MenuSlider } from "../MenuSlider/MenuSlider";
import { MenuPositions } from "../MenuPositions/MenuPositions";
import './menu.css'
import { MenuFooter } from "../MenuFooter/MenuFooter";


export function Menu() {

    const [position, setPositions] = useState([])

    return (
        <>
            <div className="menu-body">
                <MenuHeader setPositions={setPositions}/>
                <MenuSlider/>
                <MenuPositions positionsID={position} />
                <MenuFooter />
            </div>
        </>
    )
}