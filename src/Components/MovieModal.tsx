import { motion, AnimatePresence } from "framer-motion";

interface IMovieModal {
  isVisible: boolean;
  movieId: string;
}

function MovieModal({ isVisible, movieId }: IMovieModal) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          layoutId={movieId}
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
  );
}

export default MovieModal;
