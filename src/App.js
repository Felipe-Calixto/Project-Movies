import './App.css';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Movie from "./Pages/Movie/Movie";

//Components
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/movie?q=id' element={<Movie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
