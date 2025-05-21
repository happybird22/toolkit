import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SpellLibraryPage from './pages/SpellLibraryPage';
import CombatTrackerPage from './pages/CombatTrackerPage';
import './App.css'
import SpellDetailPage from './pages/SpellDetailPage';

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spells' element={<SpellLibraryPage/>}/>
        <Route path='/combat' element={<CombatTrackerPage/>}/>
        <Route path='/spells/:slug' element={<SpellDetailPage />} />
      </Routes>
  );
}

export default App
