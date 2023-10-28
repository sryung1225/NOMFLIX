import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "../Styles/SliderStyle";
import { IGetMoviesResult } from "./../api";

function Slider({ data }: { data: IGetMoviesResult | undefined }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => prev + 1);
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <S.Box key={i}>{i}</S.Box>
          ))}
        </S.Row>
      </AnimatePresence>
    </S.Slider>
  );
}

export default Slider;
