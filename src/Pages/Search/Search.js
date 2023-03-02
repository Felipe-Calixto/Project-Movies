import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../Components/MovieSearch";
import styles from "./Search.module.css";

const Search = () => {

  const [params] = useSearchParams()
  const query = params.get("q");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=63f85b855890093a6883321bee9faed8&query=${query}`)
    .then((response) => {

      setData(response.data.results)
    })
  }, [query])


  return (
    <div className={styles.conteiner}>
      <div className={styles.movieConteiner}>
        {data && data.map((data) => (
          <div>
            <MovieSearch data={data}/> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search