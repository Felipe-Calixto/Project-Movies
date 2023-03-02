import styles from "./SearchBar.module.css";
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [name, setName] = useState("");

    const navigate = useNavigate();

    const nameArray = name.split(' ');
    const names = nameArray.join('+');

    const searchMovie = (e) => {
        e.preventDefault(); 

        navigate(`search?q=${names}`);
        setName("");
    }

  return (
    <div className={styles.conteiner}>
        <form onSubmit={searchMovie}>
            <FaSearch className={styles.icon}/>
            <input type="text" placeholder="| Pesquisar" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>
  )
}

export default SearchBar