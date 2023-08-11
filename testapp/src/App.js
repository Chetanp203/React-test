import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Navbar/>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    
  );
}

export default App;
