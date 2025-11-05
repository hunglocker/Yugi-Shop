import './index.css'

import { FaHouse } from "react-icons/fa6";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiAngleDown } from "react-icons/tfi";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

function Navagation() {
  return (
    <>
      <div id="Nav">
        <ul className="list">

          <li><a style={{ fontSize: "17px", fontWeight: "bold" }} href=""> <TfiAlignJustify className='icon' /> Danh Mục Sản Phẩm</a></li>

          <li>
            <Link to='home'> Trang chủ</Link>
          </li>

          <li>
            <Link to='product'>Sản phẩm</Link>
          </li>

          <li>
            <Link to='blog'>Blog</Link>
          </li>

          <li>
            <Link to='fight'>Giải đấu</Link>
          </li>

          <li><a href="">Ban List</a></li>




        </ul>
      </div>
    </>
  )
}
export default Navagation