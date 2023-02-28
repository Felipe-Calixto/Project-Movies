import styles from "./NavBar.module.css";

//Router
import { Link } from "react-router-dom";

//Icons
import { FaSearch } from 'react-icons/fa';

//Hooks
import { useRef, useState, useEffect } from "react";
import useScrollPosition from "../Hooks/useScrollPosition";

const NavBar = () => {

    const y = useScrollPosition();

  return (
    <div className={y === 0 ? "navBarConteiner1" : "navBarConteiner2"}>
        <div className={styles.tittleConteiner}>
            <h1><Link to="/">Movies</Link></h1>
        </div>
        <div className={styles.searchConteiner}>
            <FaSearch className={styles.searchIcon}/>
            <input type="text" placeholder="| Pesquisar"/>
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