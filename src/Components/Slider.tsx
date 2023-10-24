import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "../Styles/SliderStyle";

function Slider() {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => setIndex((prev) => prev + 1);
  return (
    <S.Slider>
      <button onClick={increaseIndex}>슬라이더 작동 테스트</button>
      <AnimatePresence>
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
