import { useQuery } from "@tanstack/react-query";
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

function Home() {
  const useMultipleQuery = () => {
    const nowPlaying = useQuery<IGetMoviesResult>({
      queryKey: ["nowPlaying"],
      queryFn: getNowPlayingMovies,
    });
    const popular = useQuery<IGetMoviesResult>({
      queryKey: ["popular"],
      queryFn: getPopularMovies,
    });
    const topRated = useQuery<IGetMoviesResult>({
      queryKey: ["topRated"],
      queryFn: getTopRatedMovies,
    });
    const upcoming = useQuery<IGetMoviesResult>({
      queryKey: ["upcoming"],
      queryFn: getUpcomingMovies,
    });
    return [nowPlaying, popular, topRated, upcoming];
  };
  const [
    { isLoading: nowPlayingLoading, data: nowPlayingMovies },
    { isLoading: popularLoading, data: popularMovies },
    { isLoading: topRatedLoading, data: topRatedMovies },
    { isLoading: upcomingLoading, data: upcomingMovies },
  ] = useMultipleQuery();

  return (
    <S.Wrapper>
      {nowPlayingLoading &&
      popularLoading &&
      topRatedLoading &&
      upcomingLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            $bgPhoto={makeImagePath(
              nowPlayingMovies?.results[0]?.backdrop_path || ""
            )}
          >
            <S.Title>{nowPlayingMovies?.results[0]?.title}</S.Title>
            <S.Overview>{nowPlayingMovies?.results[0]?.overview}</S.Overview>
          </S.Banner>

          <Slider data={popularMovies} category="popular" title="명작 영화" />
          <Slider
            data={topRatedMovies}
            category="topRated"
            title="실시간 인기 영화"
          />
          <Slider data={upcomingMovies} category="upcoming" title="공개 예정" />
          <Slider
            data={nowPlayingMovies}
            category="nowplaying"
            title="지금 재생 중"
          />
        </>
      )}
    </S.Wrapper>
  );
}

export default Home;
