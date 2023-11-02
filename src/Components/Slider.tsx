import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IGetMoviesResult } from "./../api";
import * as S from "../Styles/SliderStyle";
import { makeImagePath } from "../utils";

function Slider({ data }: { data: IGetMoviesResult | undefined }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const offset = 6;
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <S.Slider>
      <button onClick={increaseIndex}>슬라이더 작동 테스트</button>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <S.Row
          variants={S.rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          key={index}
        >
          {data?.results
            ?.slice(1)
            .slice(offset * index, offset * (index + 1))
            .map((movie) => (
              <S.Box
                variants={S.boxVariants}
                initial="normal"
                whileHover="hover"
                transition={{ type: "tween" }}
                key={movie.id}
                layoutId={movie.id + ""}
                $bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                onClick={() => onBoxClicked(movie.id)}
              >
                <S.Info variants={S.infoVariants}>
                  <h4>{movie.title}</h4>
                </S.Info>
              </S.Box>
            ))}
        </S.Row>
      </AnimatePresence>
    </S.Slider>
  );
}

export default Slider;
