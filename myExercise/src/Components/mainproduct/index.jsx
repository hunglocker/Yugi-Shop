import card from '../data/data.json'
import Tmp from './tmp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';

function Mainproduct() {
    card.map((items, index) => (
        console.log(items)
    ))
    const [count, setCount] = useState(0)


    return (
        <>
            <div className='ProductList'>

                <h1 style={{ textAlign: "center", color: "#8B0000", marginTop: "15px" }}>Sản phẩm</h1>
                <div className='push'>
                    <CiShoppingCart className='guy' style={{ marginBottom: "15px" }} size={30} />
                    <span className='le'> <strong>{count}</strong></span>
                </div>

                <div className='container'>

                    <div className='row'>

                        {card.map((items, index) => (
                            <Tmp
                                image={items.image}
                                name={items.name}
                                price={items.price}
                                description={items.description}
                                count={count}
                                setCount={setCount}

                            />
                        ))}

                    </div>


                </div>
            </div>
        </>
    )
}
export default Mainproduct