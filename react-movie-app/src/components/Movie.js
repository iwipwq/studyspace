import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h2>{title}</h2>
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