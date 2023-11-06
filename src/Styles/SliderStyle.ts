import { motion } from "framer-motion";
import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  top: -100px;
  height: 290px;
  padding: 20px 0;
`;

export const Title = styled.h2`
  line-height: 40px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

export const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: calc(100% - 50px);
  margin-right: 50px;
  background-color: black;
`;

export const Box = styled(motion.div)<{ $bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 145px;
  right: 0;
  width: 50px;
  height: 50px;
  margin: auto 0;
  background-color: transparent;
  border: 0;
  svg {
    fill: #fff;
    transition: all 0.5s;
  }
  &:hover svg {
    transform: scale(1.4);
  }
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 55,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 55,
  },
};

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};
