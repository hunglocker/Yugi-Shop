
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/index';
import Navagation from './Components/Nav';
import Image from './Components/image';
import ProductBox from './Components/Productbox';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/page/trangchu';
import Product from './Components/page/sampham';
import Blog from './Components/page/blog';
import Fight from './Components/page/giaidau';
import Demon from './Components/page/demon';
import Actor from './Components/page/actor';


function App() {


  return (
    <>
    

        <Header/>
      <Navagation/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='home' element={<Home/>}></Route>
       <Route path='product' element={<Product/>}></Route>
       <Route path = 'blog' element={<Blog/>}></Route>
      <Route path='fight' element={<Fight/>}/>
      <Route path = 'demon' element= {<Demon/>}></Route>
      <Route path = 'actor' element={<Actor/>}></Route>
       </Routes>
          <Footer/>



 
      
    </>
  )
}

export default App
