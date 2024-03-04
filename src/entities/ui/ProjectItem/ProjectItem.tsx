import { IProject } from "features/projects/projectsSlice";
import styles from "./ProjectItem.module.scss";
import { Button, Card, Form } from "react-bootstrap";
import Star from "shared/icons/star.svg";
import Fork from "shared/icons/fork.svg";
import Pencil from "shared/icons/pencil.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "app/store/hooks";
import { setComment } from "features/projects/projectsSlice";
import { addToast } from "features/toast/toastSlice";
import { Link } from "react-router-dom";

interface ProjectItemProps {
  project: IProject;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const dispatch = useAppDispatch();
  const [commentValue, setCommentValue] = useState(project.comment ?? "");

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const onSaveComment = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setComment({ id: project.id, text: commentValue }));
    dispatch(
      addToast({
        title: `Добавлен комментарий`,
        text: `Добавлен комментарий к репозиторию ${project.name} пользователя ${project.owner.login}`,
      })
    );
  };

  return (
    <>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>
            <a
              target="_blank"
              href={project.html_url}
              className={styles.link}
              rel="noreferrer"
            >
              {project.name}
            </a>
          </Card.Title>
          <div className={styles.owner}>
            <img
              src={project.owner.avatar_url}
              alt="owner"
              className={styles.owner_photo}
            />
            <a
              target="_blank"
              href={project.owner.html_url}
              rel="noreferrer"
              className={styles.link}
            >
              {project.owner.login}
            </a>
          </div>
          <div className={styles.info}>
            <div className={styles.info_item}>
              <img src={Star} alt="star" />
              <p>{project.stargazers_count}</p>
            </div>
            <div className={styles.info_item}>
              <img src={Fork} alt="fork" />
              <p>{project.forks_count}</p>
            </div>
          </div>
          <Link to={`/${project.id}`} className={styles.link_to}>
            <Button>Детальная информация</Button>
          </Link>
          <Form className={styles.comment} onSubmit={onSaveComment}>
            <Form.Control
              placeholder="Комментарий к проекту"
              className={styles.comment_input}
              value={commentValue}
              onChange={onHandleChange}
              required
              minLength={3}
            />
            <Button type="submit" className={styles.comment_button}>
              <img
                alt="pencil"
                src={Pencil}
                className={styles.comment_button_image}
              />
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
