import { useEffect, useState } from "react";
import { listPublication, coursePublication } from "../../services/api";

export const usePublications = () => {
  const [publications, setPublications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPublications = async () => {
    setLoading(true);
    const res = await listPublication();
    if (!res.error) {
      setPublications(res.data.publications);
      setFiltered(res.data.publications);
    }
    setLoading(false);
  };

  const filterByCourse = async (course) => {
    setLoading(true);
    const res = await coursePublication(course);
    if (!res.error) {
      setFiltered(res.data.publications);
    }
    setLoading(false);
  };

  const filterBySearch = (text) => {
    setSearch(text);
    const result = publications.filter(p => p.title.toLowerCase().includes(text.toLowerCase()));
    setFiltered(result);
  };

  const sortPublications = (order) => {
    const sorted = [...filtered].sort((a, b) => {
      if (order === "az") return a.title.localeCompare(b.title);
      if (order === "za") return b.title.localeCompare(a.title);
      return 0;
    });
    setFiltered(sorted);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return { publications: filtered, loading, filterByCourse, filterBySearch, sortPublications };
};