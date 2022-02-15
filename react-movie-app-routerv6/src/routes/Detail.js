import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//params로 받은 id값으로 fetch하기

function DetailContents( { title, coverImg, rating, genres } ) {
    return(
        <section>
            <h1>Movie Details</h1>
            <h2>{title}</h2>
            <img src={coverImg} alt={title}></img>
            <p>rating : {rating}</p>
            <ul>genres : {genres.map( genre => <li key={genre}>{genre}</li>)}</ul>
        </section>
    );
}

function Detail() {
    const [loading,setLoading] = useState(true);
    const [detail,setDetail] = useState([]);
    const {id} = useParams();
    const userId = id
    console.log(id);
    console.log("userid",userId);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${userId}`)).json();
        console.log(json.data.movie);
        setDetail(json.data.movie)
        setLoading(false);
    }
    
    useEffect(()=>{
        console.log("uesEffect work")
        getMovie();
    },[])
    console.log(loading);
    console.log(detail.genres)   
    return (
    <div>{loading ? <h1>Loading...</h1> : <DetailContents 
        title={detail.title}
        coverImg={detail.medium_cover_image}
        rating={detail.rating}
        genres={detail.genres}
        />}</div>
    );
}
export default Detail;