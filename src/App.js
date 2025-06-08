import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home Page/Home';
import AdminRegistration from './Components/Registration form/AdminRegistration';
import AdminLogin from './Components/Registration form/AdminLogin';
import UpdateProduct from './Components/Registration form/UpdateProduct';
import AddProduct from './Components/Registration form/AddProduct';
import AdminShowdata from './Components/Registration form/AdminShowdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UpdateAdmin from './Components/Registration form/UpdateAdmin';


const App = () => {
  return (
    
   
    <Router>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/AdminRegistration' element={<AdminRegistration></AdminRegistration>}/>
    <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}/>
   
    <Route path='/updateproduct/:pid' element={<UpdateProduct></UpdateProduct>}/>

    <Route path='/adminshowdata' element={<AdminShowdata></AdminShowdata>}></Route>
    <Route path='/addproduct/:aid' element={<AddProduct></AddProduct>}></Route>
    <Route path='/updateadmin/:aid' element={<UpdateAdmin></UpdateAdmin>}></Route>
    </Routes>
     </Router>
     
      
  )
}

export default App
