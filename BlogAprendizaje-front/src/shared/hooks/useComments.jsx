import { useEffect, useState } from "react";
import { addComment, commentPublication } from "../../services/api";

export const useComments = (publicationId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    const res = await commentPublication(publicationId);
    if (!res.error) setComments(res.data.comments);
    setLoading(false);
  };

  const submitComment = async (commentData) => {
    const payload = { ...commentData, publication: publicationId };
    const res = await addComment(payload);
    if (!res.error) fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, [publicationId]);

  return { comments, loading, submitComment };
};