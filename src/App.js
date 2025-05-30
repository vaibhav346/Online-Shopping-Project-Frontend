import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home Page/Home';
import AdminRegistration from './Components/Registration form/AdminRegistration';
import AdminLogin from './Components/Registration form/AdminLogin';
import AdminProductDashboard from './Components/Registration form/AdminProductDashboard';


const App = () => {
  return (
    
   
    <Router>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/AdminRegistration' element={<AdminRegistration></AdminRegistration>}/>
    <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}/>
    <Route path='/ProductDisplay' element={<AdminProductDashboard></AdminProductDashboard>}/>
    </Routes>
     </Router>
     
      
  )
}

export default App
