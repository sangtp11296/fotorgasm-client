import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './Pages/EditorPage/Write';
import Home from "./Pages/Home/Home";

class App extends React.Component{
  render(){
    return (
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}>
                <Route path='/post' element={<Home/>}/>
              </Route>
              <Route path='/write' element={<Write/>}/>
            </Routes>
          </Router>
    );
  }
}
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}>
//           <Route path='/post' element={<Home/>}/>
//         </Route>
//       </Routes>
//     </Router>
    
//   );
// }

export default App;
