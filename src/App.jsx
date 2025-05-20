import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import SpellLibrary from './pages/SpellLibrary';

import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spells' element={<SpellLibrary/>}/>
        <Route path='' element={}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
