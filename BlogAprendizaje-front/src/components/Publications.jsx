import { usePublications } from "../shared/hooks/usePublications";
import { Navbar } from "./Navbar";
import { PostCard } from "./PostCard";
import './publications.css';

export const Publications = () => {
  const {
    publications,
    loading,
    filterByCourse,
    filterBySearch,
    sortPublications
  } = usePublications();

  return (
    <div className="main-container" style={{ minHeight: '100vh', width: '100vw' }}>
      <Navbar
        onCourseChange={filterByCourse}
        onSearch={filterBySearch}
        onSort={sortPublications}
      />
      <main className="main-content" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
        {loading ? (
          <p className="loading-text">Cargando publicaciones...</p>
        ) : (
          publications.map((publicationItem) => (
            <PostCard key={publicationItem._id} post={publicationItem} />
          ))
        )}
      </main>
    </div>
  );
};
