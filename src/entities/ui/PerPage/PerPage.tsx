import styles from "./PerPage.module.scss";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { changePerPage } from "features/info/infoSlice";
import { ChangeEvent } from "react";

export const PerPage = () => {
  const dispatch = useAppDispatch();
  const perPage = useAppSelector((state) => state.info.perPage);
  const onHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePerPage(+e.target.value));
  };
  return (
    <select value={perPage} onChange={onHandleChange} className={styles.select}>
      <option value={6}>6</option>
      <option value={9}>9</option>
      <option value={12}>12</option>
      <option value={15}>15</option>
      <option value={18}>18</option>
      <option value={21}>21</option>
    </select>
  );
};
