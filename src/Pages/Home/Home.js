import styles from "./Home.module.css";

//Hooks
import { useEffect, useState } from "react"

//Axios 
import axios from "axios";
import Movies from "../../Components/Movies";

//Slide
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {

  const [dataGernAction, setDataGernAction] = useState([]);
  const [dataGernTerror, setDataGernTerror] = useState([]);
  const [dataGernComedy, setDataGernComedy] = useState([]);
  const [dataGernRomance, setDataGernRomance] = useState([]);
  const [dataGernAdventure, setDataGernAdventure] = useState([]);
  const [dataGernFiction, setDataGernFiction] = useState([]);
  const [state, setState] = useState(true)

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=28&language=pt-BR")
      .then((response) => {
        setDataGernAction(response.data.results)
      });

      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=27&language=pt-BR")
      .then((response) => {
        setDataGernTerror(response.data.results)
      });
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=35&language=pt-BR")
      .then((response) => {
        setDataGernComedy(response.data.results)
      });
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=10749&language=pt-BR")
      .then((response) => {
        setDataGernRomance(response.data.results)
      });
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=12&language=pt-BR")
      .then((response) => {
        setDataGernAdventure(response.data.results)
      });
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=63f85b855890093a6883321bee9faed8&with_genres=878&language=pt-BR")
      .then((response) => {
        setDataGernFiction(response.data.results)
      })
  }, [])


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const loading = (state) => {
    setState(state);
  }
  
  return (
    <div className={styles.conteiner}>
      <div className={state ? "hide" : ""}>
      <div>
        <h2>Ação</h2>
        <Carousel responsive={responsive}>
          {dataGernAction && dataGernAction.map((data) => (<Movies data={data} key={data.id}/>))}
        </Carousel>
      </div>
      <div>
        <h2>Terror</h2>
        <Carousel responsive={responsive}>
          {dataGernTerror && dataGernTerror.map((data) => (<Movies data={data} key={data.id}/>))}
        </Carousel>
      </div>
      <div>
        <h2>Comédia</h2>
        <Carousel responsive={responsive}>
          {dataGernComedy && dataGernComedy.map((data) => (<Movies data={data} key={data.id}/>))}
        </Carousel>
      </div>
      <div>
        <h2>Romance</h2>
        <Carousel responsive={responsive}>
          {dataGernRomance && dataGernRomance.map((data) => (<Movies data={data} key={data.id}/>))}
        </Carousel>
      </div>
      <div>
        <h2>Aventura</h2>
        <Carousel responsive={responsive}>
          {dataGernAdventure && dataGernAdventure.map((data) => (<Movies data={data} key={data.id}/>))}
        </Carousel>
      </div>
      <div>
        <h2>Ficção</h2>
        <Carousel responsive={responsive}>
          {dataGernFiction && dataGernFiction.map((data) => (<Movies data={data} changeState={loading} key={data.id}/>))}
        </Carousel>
      </div>
      </div>
    </div>
  )
}

export default Home