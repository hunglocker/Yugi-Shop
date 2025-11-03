import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CgLogIn } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import './index.css'
function Header() {
    return(
        <>
        
        <div id="Header">
            


             <nav className='navbar navbar-light '>
                     <div className='container'>

                      <a className='navbar-brand' href = "#" >
                        
                           <img className= 'rounded-circle' src='./img/logoyugi.png' alt='Logo' width={100} height={50}></img>
                         
                       
                         
                        
                        </a>         
                     
            

                     </div>
                    
                    
                    </nav>    


                  
                  <ul className="list">
        
                     <li> <a href=''>Đăng ký</a></li>
                     <li> <a href=''>Đăng nhập</a></li>
                   
                </ul>
                       <div className='input'>
                            <input style={{marginTop : '20px', borderRadius: "10px", marginLeft: "5px", fontSize: "20px"}} type='text' placeholder='Search'></input>
                              <IoSearchOutline className='fine'  />

                       </div>
             
                       
             
             
            
            
            
            
            </div>  
               
                
             
                 
                 
         
         
        
        
        </>
    )
}
export default Header;

