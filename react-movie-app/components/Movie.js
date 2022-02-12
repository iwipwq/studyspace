import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Link를 사용하면 새로고침(리렌더링) 없이 페이지내에서 다른컴포넌트로 이동할 수 있다.

function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h2><Link to="/movie">{title}</Link></h2>
            <p>{summary}</p>
            <ul>
            {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}
//string을 가진 array
//여기에서 proptypes 할때 소문자 p
Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;