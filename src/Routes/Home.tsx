import { useQuery } from "react-query";
import { IGetMoviesResult, getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data, isLoading);
  return <h1>Home</h1>;
}

export default Home;
