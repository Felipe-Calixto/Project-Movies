import { useNavigate } from "react-router-dom";

const MovieSearch = ({data}) => {
  
    const navigate = useNavigate();

    const clickMovie = () => {
        navigate(`/movie/${data.id}`)
    }

    return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} onClick={clickMovie}/> 
    </div>
  )
}

export default MovieSearch