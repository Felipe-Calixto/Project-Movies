import './App.css';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Movie from "./Pages/Movie/Movie";

//Components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className='conteiner'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='movie/:id' element={<Movie/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
