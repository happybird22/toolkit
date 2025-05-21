import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SpellLibraryPage from './pages/SpellLibraryPage';
import CombatTrackerPage from './pages/CombatTrackerPage';
import './App.css'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spells' element={<SpellLibraryPage/>}/>
        <Route path='/combat' element={<CombatTrackerPage/>}/>
      </Routes>
  );
}

export default App
