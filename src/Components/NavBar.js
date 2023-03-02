import styles from "./NavBar.module.css";

//Router
import { Link } from "react-router-dom";

//Icons
import { FaSearch } from 'react-icons/fa';

//Hooks
import { useState, useEffect, useRef } from "react";
import useScrollPosition from "../Hooks/useScrollPosition";
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar";

const NavBar = () => {

    const y = useScrollPosition();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const nameArray = name.split(' ');
    const names = nameArray.join('+');

    const [state, setState] = useState(false);
    const myRef = useRef(null);

    const searchMovie = (e) => {
        e.preventDefault(); 

        navigate(`search?q=${names}`);
        setName("");
    }

    const changeState = () => {
        setState(!state);
        console.log(state)
    }

    useEffect(() => {
      function handleClickOutside(event) {
        if (myRef.current && !myRef.current.contains(event.target)) {
          setState(false)
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [myRef]);

    const [hasScrolled, setHasScrolled] = useState(false);

    console.log(hasScrolled)
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setState(false)
      } 
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={y === 0 ? "navBarConteiner1" : "navBarConteiner2"} ref={myRef}>
        <div className={styles.navBarChildren}>
            <div className={styles.tittleConteiner}>
                <h1><Link to="/">Movies</Link></h1>
            </div>
            <div className={styles.searchConteiner}>
                <FaSearch className={styles.searchIcon}/>
                <form onSubmit={searchMovie}>
                    <input type="text" placeholder="| Pesquisar" value={name} onChange={(e) => setName(e.target.value)}/>
                </form>
            </div>
            <div className={styles.responsiveSeachIcon}>
                <FaSearch className={styles.responsiveIcon} onClick={changeState}/>
            </div>
        </div>
        {state && (
            <>
                <SearchBar/>
            </>
        )}
    </div>
  )
}

export default NavBar