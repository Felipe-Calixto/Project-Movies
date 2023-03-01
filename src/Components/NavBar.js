import styles from "./NavBar.module.css";

//Router
import { Link } from "react-router-dom";

//Icons
import { FaSearch } from 'react-icons/fa';

//Hooks
import { useState, useEffect } from "react";
import useScrollPosition from "../Hooks/useScrollPosition";
import { useNavigate } from "react-router-dom"

const NavBar = () => {

    const y = useScrollPosition();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const searchMovie = (e) => {
        e.preventDefault(); 

        navigate(`search?q=${name}`);
        setName("");
    }

  return (
    <div className={y === 0 ? "navBarConteiner1" : "navBarConteiner2"}>
        <div className={styles.tittleConteiner}>
            <h1><Link to="/">Movies</Link></h1>
        </div>
        <div className={styles.searchConteiner}>
            <FaSearch className={styles.searchIcon}/>
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="| Pesquisar"  onChange={(e) => setName(e.target.value)}/>
            </form>
        </div>
        <div className={styles.linksConteiner}>
            <Link to="/">Home</Link>
            <Link>Gêneros</Link>
            <Link>Melhores</Link>
        </div>
    </div>
  )
}

export default NavBar