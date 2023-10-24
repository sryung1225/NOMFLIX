import { motion } from "framer-motion";
import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 5px;
  background-color: black;
`;

export const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  color: red;
  font-size: 66px;
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};
