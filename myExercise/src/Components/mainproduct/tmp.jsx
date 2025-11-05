import 'bootstrap/dist/css/bootstrap.min.css';
import "./tmp.css"
import { FiPlus } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";

function Tmp(props) {

    function bold() {
        alert(`Đã mua thành công ${props.name}`);
    }

    function fullCart(e) {
        alert(`Đã thêm ${props.name} vào giỏ hàng`)
        props.setCount(props.count + 1);
    }


    return (

        <>

            <div className='col-12 col-md-3'>
                <div className='card'>

                    <div className='cardHeader'>
                        <img src={props.image} alt={props.name} className='img-fluid' />
                    </div>
                    <div className='cardBody'>
                        <p style={{ marginTop: "7px" }}> <strong>{props.name}</strong></p>
                        <p style={{ color: "red", fontWeight: bold }}> <strong>{props.price}<u>đ</u></strong></p>

                        <div className='form'>
                            <button onClick={fullCart} className='cart'> <FiPlus />Giỏ hàng</button>
                            <button onClick={bold} className='buy'><CiShoppingCart />Mua hàng</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Tmp;