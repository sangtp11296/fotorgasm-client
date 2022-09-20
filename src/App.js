import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './Pages/EditorPage/Write';
import Home from "./Pages/Home/Home";
import Login from './Pages/Admin/Login'
import Register from './Pages/Admin/Register'

class App extends React.Component{
  render(){
    return (
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/post' element={<Home/>}/>
              <Route path='/write' element={<Write/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
          </Router>
    );
  }
}

export default App;
