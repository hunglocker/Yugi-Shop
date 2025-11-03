import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
  import { FaFacebook } from "react-icons/fa";
  import { FaGoogle } from "react-icons/fa";
  import { FaYoutube } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";

function Footer() {
    return(
        <>

        <footer id='footer' className='bg-dark text-light'>
                
                <div className='container'>
                    <div className='row'>
                            
                            <div className='col-md-4 mb-3'>
                                       
                                        <h5 class="text-uppercase mt-2 text-center">Liên hệ</h5>
                                        <ul className='Contact-list'>
                                             <li><FaMapMarkerAlt className='iconer' />334 Đ. Nguyễn Trãi, Thanh Xuân Trung, Thanh Xuân, Hà Nội  </li>
                                             <li><FaPhoneVolume /> Số điện thoại :  09674358122 </li>
                                             <li> <BiLogoGmail /> <a href='mailto:hungdinh9546@gmail.com'> YugiLengendshop3397@gmail.com</a> </li>
                                             <li></li>
                                              





                                        </ul>
                            </div>



                              <div class="col-md-4 mb-3">
                <h5 class="text-uppercase mt-2">Chính sách</h5>
                <ul className='policy-list'>
                    <li> <a href=''>Chính sách đổi trả</a></li>
                    <li> <a href=''>Chính sách bảo mật</a></li>
                    <li>  <a href=''>Điều khoản dịch vụ</a> </li>
                </ul>
            </div>





            <div class="col-md-4 mb-3">
                <h5 class="text-uppercase mt-2">Hướng dẫn</h5>
                <ul className='instruct-list'>
                   <li> <a href="#">Hướng dẫn bọc bài</a></li>
                    <li> <a href="#">Hướng dẫn nhận quà tặng</a></li>
                    <li> <a href="#">Kiểm tra đơn hàng</a></li>
                    <li> <a href="#">Sản phẩm nổi bật</a></li>
                    <li> <a href="#">Tất cả sản phẩm</a></li>
                </ul>
            </div>





                    </div>




                </div>
               
               <hr className='border-dark' ></hr>
                <p className="text-light text-center">©1996 Kazuki Takahashi. All rights reserved.</p>
              <ul className='social-items'>

         <li><a href='https://www.facebook.com/M2duelstore/'> <FaFacebook /> </a></li> 
         <li><a href='https://m2duelstore.com/'>  <FaGoogle />  </a></li> 
         <li><a href='https://www.youtube.com/c/M2DUELCHANNEL'> <FaYoutube /></a></li>   
         <li><a href='https://www.instagram.com/'> <FaInstagram /></a></li> 


                </ul>
              
              


        </footer>
           
        
        </>
    )
}
export default Footer
