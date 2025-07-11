import { useState } from 'react'; //import useState from react 
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap  CSS for styling
import {BrowserRouter,Routes,Route} from 'react-router-dom'; //import components from React router
import Login from './Login';  //import login component
import Register from './Register';  //import Register component
import Home from './Home';  //import Home component

function App() {
  

  return (
      <BrowserRouter> 
      <Routes>
        <Route path='/login' element={<Login/>}></Route>  
        <Route path='/register' element={<Register/>}></Route>        
        <Route path='/home' element={<Home/>}></Route> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;   //exporting the App component so it can be used in other parts of the app...
