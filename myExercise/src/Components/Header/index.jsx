import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CgLogIn } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import './index.css'
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';
function Header() {
    return (
        <>

            <div id="Header">


                <div className='logo'>
                    <img src="./img/logoblue.png" alt="image" style={{ height: "50px", borderRadius: "7px", marginTop: "7px", marginLeft: "15px" }} />
                </div>


                <div className='input'>
                    <input style={{ marginTop: '5px', borderRadius: "7px", marginLeft: "5px", fontSize: " 20px 28px", width: "550px", height: "30px" }} type='text' placeholder='Search'></input>
                    <IoSearchOutline className='fine' />

                </div>







                <ul className="list">
                    <li>
                        <Cart />
                    </li>

                    <li>
                        <Link to='signupper'>Đăng ký</Link>
                    </li>


                    <li>
                        <Link to='loginer'>Đăng nhập </Link>
                    </li>




                </ul>










            </div>









        </>
    )
}
export default Header;

