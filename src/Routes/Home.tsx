import { useQuery } from "react-query";
import {
  IGetMoviesResult,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/HomeStyle";
import Slider from "../Components/Slider";
import MovieModal from "../Components/MovieModal";

function Home() {
  const useMultipleQuery = () => {
    const nowPlaying = useQuery<IGetMoviesResult>(
      ["nowPlaying"],
      getNowPlayingMovies
    );
    const popular = useQuery<IGetMoviesResult>(["popular"], getPopularMovies);
    const topRated = useQuery<IGetMoviesResult>(
      ["topRated"],
      getTopRatedMovies
    );
    const upComming = useQuery<IGetMoviesResult>(
      ["upComming"],
      getUpcomingMovies
    );
    return [nowPlaying, popular, topRated, upComming];
  };
  const [
    { isLoading: loadingNowPlaying, data: nowPlayingData },
    { isLoading: loaingPopular, data: popularData },
    { isLoading: loadingTopRated, data: topRatedData },
    { isLoading: loaingUpComming, data: upCommingData },
  ] = useMultipleQuery();

  return (
    <S.Wrapper>
      {loadingNowPlaying &&
      loaingPopular &&
      loadingTopRated &&
      loaingUpComming ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            $bgPhoto={makeImagePath(
              nowPlayingData?.results[0]?.backdrop_path || ""
            )}
          >
            <S.Title>{nowPlayingData?.results[0]?.title}</S.Title>
            <S.Overview>{nowPlayingData?.results[0]?.overview}</S.Overview>
          </S.Banner>
          <Slider data={nowPlayingData} title="지금 재생 중" />
          <Slider data={popularData} title="명작 영화" />
          <Slider data={topRatedData} title="실시간 인기 영화" />
          <Slider data={upCommingData} title="공개 예정" />
          <MovieModal data={nowPlayingData} />
        </>
      )}
    </S.Wrapper>
  );
}

export default Home;
