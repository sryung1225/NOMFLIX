import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const BigMovie = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 40vw;
  height: 80vh;
  margin: auto;
`;

export const overlayVariants = {
  visible: {
    opacity: 0.7,
  },
  exit: {
    opacity: 0,
  },
};
