
import './App.css';
import Header from './components/header/Header';
import Movies from './components/Movies/Movies';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessions from './components/sessions/sessions';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessions/:id" element={<Sessions />} />
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
