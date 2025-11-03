import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Link , useNavigate} from "react-router-dom"

function Section() {
    const navigate = useNavigate();
        function handClick() {
                 navigate('/demon')
        }
        const navagation = useNavigate();
        function handleClick() {
                navagation('/actor')
        }
    return(
        <>
          <div className="mainBlog">
               <h1 style={{color: "#800000"}}>Các Tộc Bài</h1>
               <div className='container'>
                   <div className='row'>
                       <div className='col-12 col-md-6'>
                              <div className='card'>
                                
                                 <div className='cardHeader' style={{width: "100%"}}>
                                          <img src="./img/demon.jpg" alt="image" className='img-fluid' style={{width: '100%', objectFit: 'content'}}/>
                                          <div className='show'>
                                             
                                              <h6 className='high6'>Abyss Actor: Phía Sau Những Ánh Đèn Sân Khấu</h6>
                                                 <p>Abyss Actors" là một nhóm quái vật thường được sử dụng trong trò chơi bài ma thuật Yu-Gi-Oh!. Chúng là các diễn viên của vùng đáy đại dương, có khả năng biến hóa thành các vai...</p>

                                          </div>
                                          <div className='upadate'>
                                              <button onClick={handClick} className='btn3'>Chi tiết</button>
                                          </div>

                                 </div>
                                
                                
                                </div> 


                       </div>

                       <div className='col-12 col-md-6'>
                           <div className='card'>
                               
                               <div className='cardHeader' style={{width: "100%"}}>
                                       
                                       <img src="./img/abyss.jpg" alt="image" className='img-fluid' style={{width: "100%", objectFit: "content"}} />
                                       <div className='show'>
                                          
                                          <h6 className='high6'>Abyss Actor: Phía Sau Những Ánh Đèn Sân Khấu</h6>
                                     <p>Abyss Actors" là một nhóm quái vật thường được sử dụng trong trò chơi bài ma thuật Yu-Gi-Oh!. Chúng là các diễn viên của vùng đáy đại dương, có khả năng biến hóa thành các vai...</p>

                                       </div>

                                       <div className='update'>
                                          <button onClick={handClick} className='btn4'>Chi tiết</button>
                                       </div>

                               </div>

                           </div>

                       </div>


                   </div>

               </div>
          </div>
        </>
    )
}
export default Section;