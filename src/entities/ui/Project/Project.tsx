import { fetchProjectById } from "api/projectsApi";
import { IProject } from "features/projects/projectsSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Project.module.scss";

export const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<IProject>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (projectId) {
      fetchProjectById(+projectId).then((res) => {
        setProject(res);
        setLoading(false);
      });
    } else {
      navigate("../");
    }
  }, []);
  return loading ? (
    <h1>Поиск проекта ...</h1>
  ) : (
    <>
      <p>Название репозитория: {project?.name}</p>
      <p>Полное название репозитория: {project?.full_name}</p>
      <p>Описание репозитория: {project?.description}</p>
      <div className={styles.owner}>
        Владелец:{" "}
        <img
          src={project?.owner.avatar_url}
          alt="owner_photo"
          className={styles.owner_photo}
        />
        <p>{project?.owner.login}</p>
      </div>
    </>
  );
};
