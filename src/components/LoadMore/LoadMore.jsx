import { LoadMorePage, ButtonWrap } from "./LoadMore.styled";

const LoadMore = ({ loadMore, disabled }) => {
  return (
    <ButtonWrap>
      <LoadMorePage
        onClick={loadMore}
        disabled={disabled}
      >
        Загрузити ще
      </LoadMorePage>
    </ButtonWrap>
  );
};
export default LoadMore;
