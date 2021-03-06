import { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";
// npm i gh-pages

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const moviesUrl =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year";
  const [url, setUrl] = useState(moviesUrl);
  const getMovies = useCallback(async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  }, [url]);
  useEffect(() => {
    setUrl((moviesUrl) => moviesUrl);
    getMovies();
  }, [getMovies]);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
