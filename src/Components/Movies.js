import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Pages/Movie/Movie";
import styles from "./Movies.module.css";
import { useNavigate } from "react-router-dom";

const Movies = ({data}) => {

    const [movieImg, setMovieImg] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`)
        .then((response) => {
            setMovieImg(response.config.url)
        })
    }, [data])

    const clickMovie = () => {
        navigate(`movie/${data.id}`)
    }
    
  return (
    <div className={styles.conteiner} onClick={clickMovie}>
        <img src={movieImg}/>
        <p>{data.title}</p>
    </div>
  )
}

export default Movies