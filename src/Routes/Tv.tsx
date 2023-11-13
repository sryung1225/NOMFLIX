import { useQuery } from "react-query";
import { IGetMoviesResult, getAiringTodayTv } from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/HomeStyle";
import Slider from "../Components/Slider";

function Tv() {
  const useMultipleQuery = () => {
    const airingToday = useQuery<IGetMoviesResult>(
      ["airingToday"],
      getAiringTodayTv
    );
    return [airingToday];
  };
  const [{ isLoading: airingTodayLoading, data: airingTodayTv }] =
    useMultipleQuery();

  return (
    <S.Wrapper>
      {airingTodayLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            $bgPhoto={makeImagePath(
              airingTodayTv?.results[0]?.backdrop_path || ""
            )}
          >
            <S.Title>{airingTodayTv?.results[0]?.title}</S.Title>
            <S.Overview>{airingTodayTv?.results[0]?.overview}</S.Overview>
          </S.Banner>
          <Slider
            data={airingTodayTv}
            category="airingToday"
            title="오늘 방영"
          />
        </>
      )}
    </S.Wrapper>
  );
}

export default Tv;
