import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import SpellLibrary from './pages/SpellLibrary';
import CombatTrackerPage from './pages/CombatTrackerPage';

import './App.css'
import CombatTrackerPage from './pages/CombatTrackerPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spells' element={<SpellLibrary/>}/>
        <Route path='/combat' element={<CombatTrackerPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
