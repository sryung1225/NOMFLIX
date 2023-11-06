import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/MovieModalStyle";

interface IMovieModal {
  data: IGetMoviesResult | undefined;
  isVisible: boolean;
  movieId: string;
}

function MovieModal({ data, isVisible, movieId }: IMovieModal) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/");
  const clickedMovie =
    movieId && data?.results.find((movie) => movie.id === +movieId);
  return (
    <AnimatePresence>
      {isVisible ? (
        <>
          <S.Overlay
            onClick={onOverlayClick}
            variants={S.overlayVariants}
            animate="visible"
            exit="exit"
          />
          <S.BigMovie layoutId={movieId}>
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
