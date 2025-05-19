import { useState } from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { useComments } from "../shared/hooks/useComments";

export const PostCard = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const { comments, submitComment } = useComments(post._id);

    return (
        <div className="post-card" style={{ width: '100%', maxWidth: '900px' }}>
            <h2>{post.title}</h2>
            <p className="meta">Por {post.author} - {new Date(post.date).toLocaleDateString()}</p>
            <p>{post.description}</p>
            <button
                className="toggle-comment-button"
                onClick={() => setShowComments(!showComments)}
            >
                {showComments ? "Ocultar comentarios" : "Agregar comentario"}
            </button>
            {showComments && (
                <div className="comment-section">
                    <CommentForm onSubmit={submitComment} />
                    <CommentList comments={comments} />
                </div>
            )}
        </div>
    );
};