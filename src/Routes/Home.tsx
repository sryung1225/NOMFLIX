import { useQuery } from "react-query";
import { IGetMoviesResult, getMovies } from "../api";
import * as S from "../Styles/HomeStyle";
import { makeImagePath } from "../utils";
import Slider from "../Components/Slider";
import { useMatch } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
          <AnimatePresence>
            {bigMovieMatch ? (
              <motion.div
                layoutId={bigMovieMatch.params.movieId}
                style={{
                  position: "absolute",
                  top: 50,
                  left: 0,
                  right: 0,
                  width: "40vw",
                  height: "80vh",
                  margin: "0 auto",
                  backgroundColor: "skyblue",
                }}
              />
            ) : null}
          </AnimatePresence>
        </>
      )}
    </S.Wrapper>
  );
}

export default Home;
