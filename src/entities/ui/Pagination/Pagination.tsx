import { useAppDispatch, useAppSelector } from "app/store/hooks";
import styles from "./Pagination.module.scss";
import Arrow from "shared/icons/arrow.svg";
import { Button } from "react-bootstrap";
import { changePage } from "features/info/infoSlice";

export const Pagination = () => {
  const { page, perPage } = useAppSelector((state) => state.info);
  const { total, projectsList } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const changePageNumber = (page: number) => {
    dispatch(changePage(page));
  };
  const onNextPage = () => {
    changePageNumber(page + 1);
  };
  const onPrevPage = () => {
    if (page !== 1) {
      changePageNumber(page - 1);
    }
  };
  const isLastPage = page * perPage > total;
  return (
    <div
      className={`${styles.buttons} ${
        page === 1 || isLastPage ? styles._3 : styles._5
      } ${!projectsList.length && "invisible"}`}
    >
      {page > 1 && (
        <>
          <Button
            variant="outline"
            className={`${styles.arrow} ${styles.empty}`}
            onClick={onPrevPage}
          >
            <img src={Arrow} alt="arrow" className={styles.arrow_back} />
          </Button>
          <Button
            variant="outline"
            className={styles.empty}
            onClick={onPrevPage}
          >
            {page - 1}
          </Button>
        </>
      )}

      <Button variant="primary">{page}</Button>
      {!isLastPage && (
        <>
          <Button
            variant="outline"
            className={styles.empty}
            onClick={onNextPage}
          >
            {page + 1}
          </Button>
          <Button
            variant="outline"
            className={`${styles.arrow} ${styles.empty}`}
            onClick={onNextPage}
          >
            <img src={Arrow} alt="arrow" />
          </Button>
        </>
      )}
    </div>
  );
};
