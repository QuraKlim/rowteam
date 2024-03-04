import { ProjectsList } from "../projectsList/ProjectsList";
import styles from "./Projects.module.scss";
import { PerPage } from "../PerPage/PerPage";
import { Pagination } from "../Pagination/Pagination";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectsList />
      <div className={styles.page_footer}>
        <PerPage />
        <Pagination />
      </div>
    </div>
  );
};
