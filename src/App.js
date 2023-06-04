import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './Pages/EditorPage/Write';
import Home from "./Pages/Home/Home";
import PostPage from './components/Layout/PostPage/PostPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import WelcomeAdmin from './Pages/Admin/WelcomeAdmin';
import { useSelector } from 'react-redux';

function App(){
  const user = useSelector((state) => state.auth.user);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/admin' element={<WelcomeAdmin/>}/>
        <Route path='/fotorgasm' element={ user ? <Dashboard/> : <WelcomeAdmin/> }/>
      </Routes>
    </Router>
  );
}

export default App;
