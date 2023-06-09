import { useEffect, useState } from "react";
import axios from 'axios'
import { MenuPosition } from "../MenuPosition/MenuPosition";

const PositionsElement = ({ name, positionsID}) => {
    const [statePositons, setStatePositons] = useState([]);
    const restNum = localStorage.getItem('restNumber')

    useEffect(() => {   
        async function getPositionsById(positionsID){
            const result = await axios.get(`http://localhost:3001/api/public/positions/${restNum}/${positionsID}`)
            setStatePositons(result.data.positions)
        }
        getPositionsById(positionsID)
    }, []);

    return (
        <div className="container">
            <div className="popular-wrapper">
                <div className="title-wrapper" id={name}>
                    <span className="title">{ name }</span>
                </div>
                <div className="cards">
                    {statePositons?.map((positions) =>
                        <MenuPosition id_element={positions} key={positions.id_position} ingridint={positions.ingridint} name={positions.name} price={positions.price} img={positions.img[0]?.patch} img1={positions.img[1]?.patch}/>
                    )}
                </div>
            </div>
        </div>
    )
}
export default PositionsElement