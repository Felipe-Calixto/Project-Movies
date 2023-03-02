import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import { useNavigate } from "react-router-dom";



const Movies = ({data, changeState}) => {

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

    useEffect(() => {
        if (!changeState) {
            return
        }
        
        if (!movieImg) {
            changeState(true)
        } else {
            changeState(false)
        }

    }, [movieImg])
    
  return (
    <div className={styles.conteiner} onClick={clickMovie}>
        
                <img src={movieImg}/>
                <p>{data.title}</p>

      
    </div>
  )
}

export default Movies