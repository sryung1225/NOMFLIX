import { useNavigate } from "react-router-dom";
import { IGetMovieDetail, getMovieDetail } from "../api";
import { makeImagePath } from "../utils";
import * as S from "../Styles/MovieModalStyle";
import { useQuery } from "react-query";

interface ITvModal {
  id?: string;
  category: string;
}

function TvModal({ id, category }: ITvModal) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/tv");
  const { data: detailData } = useQuery<IGetMovieDetail>(["tv", id], () =>
    getMovieDetail(id)
  );
  return (
    <>
      <S.Overlay
        onClick={onOverlayClick}
        variants={S.overlayVariants}
        animate="visible"
        exit="exit"
      />
      <S.BigMovie layoutId={`${category}-${id}`}>
        {detailData && (
          <>
            <S.BigCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                  detailData.backdrop_path,
                  "w500"
                )})`,
              }}
            />
            <S.BigTitle>{detailData.title}</S.BigTitle>
            <S.BigOverview>{detailData.overview}</S.BigOverview>
          </>
        )}
      </S.BigMovie>
    </>
  );
}

export default TvModal;
