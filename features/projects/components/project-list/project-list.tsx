import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { LoadingIndicator } from "@features/ui";
import { Alert } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    console.error(error);
    return (
      <Alert
        data-cy="projects-error-message"
        context="project"
        refetchFn={() => refetch()}
      />
    );
  }

  return (
    <ul className={styles.list} data-cy="project-list">
      {data?.map((project) => (
        <li key={project.id} data-cy="project">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
