import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './Pages/EditorPage/Write';
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import PostPage from './components/Layout/PostPage/PostPage';
import Dashboard from './Pages/Dashboard/Dashboard';

class App extends React.Component{
  render(){
    return (
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/post/:id' element={<PostPage/>}/>
              <Route path='/write' element={<Write/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/fotorgasm' element={<Dashboard/>}/>
            </Routes>
          </Router>
    );
  }
}

export default App;
