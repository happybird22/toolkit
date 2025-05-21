import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SpellLibrary from './pages/SpellLibrary';
import CombatTrackerPage from './pages/CombatTrackerPage';
import './App.css'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spells' element={<SpellLibrary/>}/>
        <Route path='/combat' element={<CombatTrackerPage/>}/>
      </Routes>
  );
}

export default App
