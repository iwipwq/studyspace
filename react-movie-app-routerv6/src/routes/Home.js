import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import keyUrl from "../Key";

function Home() {
    const [loading,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (await fetch(keyUrl)).json();
        setMovies(json.data.movies);
        setLoading(false);
    } 
    // const getMovies = async() => {
    //   const response = await fetch(keyUrl);
    //   const json = await response.json();
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // }
    useEffect(()=>{
        getMovies();
    },[])
    console.log(movies)
    console.log(keyUrl)
    return (
        <div>
        {loading ? <h1>Loading...</h1> : <div>{movies.map((movie) =>
                <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
            )}
        </div>
        }
        </div>
    );
}

export default Home;