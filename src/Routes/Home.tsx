import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";
import { IGetMoviesResult, getMovies } from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/HomeStyle";
import Slider from "../Components/Slider";
import MovieModal from "../Components/MovieModal";

function Home() {
  const bigMovieMatch = useMatch("/movies/:movieId");
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            $bgPhoto={makeImagePath(data?.results[0]?.backdrop_path || "")}
          >
            <S.Title>{data?.results[0]?.title}</S.Title>
            <S.Overview>{data?.results[0]?.overview}</S.Overview>
          </S.Banner>
          <Slider data={data} />
          <MovieModal
            data={data}
            isVisible={!!bigMovieMatch}
            movieId={bigMovieMatch?.params.movieId || ""}
          />
        </>
      )}
    </S.Wrapper>
  );
}

export default Home;
