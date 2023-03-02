import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=63f85b855890093a6883321bee9faed8&language=pt-BR`)
    .then((response) => {
      setMovie(response.data);
    })
    
    window.scrollTo(0,0);
  }, [])

  const img = `https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`;

  return (
    <div className={styles.conteiner} style={{ backgroundImage: `url(${img})` }}>
      <div  className={styles.infsConteiner}>
        <div className={styles.imgConteiner}>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
        </div>
        <div className={styles.descriptionConteiner}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Gêneros: {movie.genres && movie.genres.map((gern) => (
            <>
              <span key={gern.id}>{gern.name} | </span>
            </>
          ))}</p>
          <p>Duração: <span>{movie.runtime}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Movie