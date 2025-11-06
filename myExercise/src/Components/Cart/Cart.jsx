import Rect, { useState } from 'react'
import './cart.css'
import { FaShoppingCart } from "react-icons/fa";
function cart() {

    const [counter, setcounter] = useState(0);
    function upper() {
        setcounter(counter + 1);
    }
    return (
        <>
            <FaShoppingCart className='carter' />
        </>
    )
}

export default cart
