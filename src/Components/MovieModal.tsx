import { useNavigate } from "react-router-dom";
import { AnimatePresence, useScroll } from "framer-motion";
import * as S from "../Styles/MovieModalStyle";

interface IMovieModal {
  isVisible: boolean;
  movieId: string;
}

function MovieModal({ isVisible, movieId }: IMovieModal) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/");
  const { scrollY } = useScroll();
  return (
    <AnimatePresence>
      {isVisible ? (
        <>
          <S.Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <S.BigMovie style={{ top: scrollY.get() + 100 }} layoutId={movieId}>
            hello
            <p>{movieId}</p>
          </S.BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MovieModal;
