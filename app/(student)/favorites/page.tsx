import { useBookmarks } from '@/components/BookmarkContext';
import ProjectCard from '@/components/ProjectCard';
import styles from './favorites.module.css';

export default function Favorites() {
  const { bookmarkedProjects } = useBookmarks();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bookmarked Projects</h1>
      <div className={styles.projectList}>
        {bookmarkedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
