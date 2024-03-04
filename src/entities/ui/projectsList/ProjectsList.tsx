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
          <h1 className={projectsList.length ? styles.header : ""}>
            Поиск проектов ...
          </h1>
        )}
        {status === EStatus.NO_RESULT && (
          <h1>Результатов, удволетворяющих запросу, не найдено</h1>
        )}
        {status === EStatus.ERROR && (
          <h1>Произошла ошибка при обращении к серверу, попробуйте позднее</h1>
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
