import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/MovieModalStyle";

function MovieModal({ data }: { data: IGetMoviesResult | undefined }) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/");
  const bigMovieMatch = useMatch("/movies/:movieId");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results?.find(
      (movie) => movie.id === Number(bigMovieMatch?.params.movieId)
    );
  return (
    <AnimatePresence>
      {bigMovieMatch ? (
        <>
          <S.Overlay
            onClick={onOverlayClick}
            variants={S.overlayVariants}
            animate="visible"
            exit="exit"
          />
          <S.BigMovie layoutId={bigMovieMatch.params.movieId}>
            {clickedMovie && (
              <>
                <S.BigCover
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      clickedMovie.backdrop_path,
                      "w500"
                    )})`,
                  }}
                />
                <S.BigTitle>{clickedMovie.title}</S.BigTitle>
                <S.BigOverview>{clickedMovie.overview}</S.BigOverview>
              </>
            )}
          </S.BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MovieModal;
