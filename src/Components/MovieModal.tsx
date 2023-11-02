import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as S from "../Styles/MovieModalStyle";

interface IMovieModal {
  isVisible: boolean;
  movieId: string;
}

function MovieModal({ isVisible, movieId }: IMovieModal) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/");
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
            hello
            <p>{movieId}</p>
          </S.BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MovieModal;
