import { useAppSelector } from "app/store/hooks";
import styles from "./projectsList.module.scss";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { EStatus } from "features/projects/projectsSlice";

export const ProjectsList = () => {
  const { projectsList, status } = useAppSelector((store) => store.projects);

  return (
    <div>
      <section className="relative">
        {status === EStatus.LOADING && (
          <h1 className={styles.header}>Поиск проектов ...</h1>
        )}
        <div
          className={`${styles.projects} ${
            status === EStatus.LOADING && " invisible"
          }`}
        >
          {projectsList.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  );
};
