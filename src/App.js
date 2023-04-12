import './App.css';
import { Routes, Route } from "react-router-dom";
import HeroImg from './resources/photo-1512295767273-ac109ac3acfa 1.jpg';

// pages & components
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetails from './components/BlogDetails';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
