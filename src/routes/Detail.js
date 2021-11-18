import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import MoiveDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieData(json);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            {movieData.status === "ok" ? (
              <MoiveDetail
                medium_cover_image={movieData.data.movie.medium_cover_image}
                title={movieData.data.movie.title}
                rating={movieData.data.movie.rating}
                genres={movieData.data.movie.genres}
                year={movieData.data.movie.year}
                runtime={movieData.data.movie.runtime}
                description_full={movieData.data.movie.description_full}
              />
            ) : (
              <div>Something wrong on load data</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
