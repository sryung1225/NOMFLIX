import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #000;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: #000;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 68px;
`;

export const Overview = styled.p`
  width: 50%;
  font-size: 30px;
`;
