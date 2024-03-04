import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Search.module.scss";
import SearchIcon from "shared/icons/search.svg";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchProjectsByTitle } from "features/projects/projectsSlice";

export const Search = () => {
  const [search, setSearch] = useState(localStorage.getItem("search") ?? "");
  const dispatch = useAppDispatch();

  const { perPage, page } = useAppSelector((state) => state.info);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("search", e.target.value);
    setSearch(e.target.value);
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (search.length > 2) {
      dispatch(fetchProjectsByTitle({ text: search, perPage, page }));
    }
  };
  useEffect(() => {
    if (search.length > 2) {
      dispatch(fetchProjectsByTitle({ text: search, perPage, page }));
    }
  }, [page, perPage]);

  return (
    <Form className={styles.search} onSubmit={onHandleSubmit}>
      <Form.Control
        type="text"
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        value={search}
        onChange={onHandleChange}
        className={styles.search_input}
        minLength={3}
      />
      <Button type="submit" className={styles.search_submit}>
        <img
          src={SearchIcon}
          alt="search"
          className={styles.search_submit_icon}
        />
      </Button>
    </Form>
  );
};
