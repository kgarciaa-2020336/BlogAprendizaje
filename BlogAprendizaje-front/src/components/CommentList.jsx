export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map((commentItem, commentIndex) => (
      <div key={commentIndex} className="comment-item">
        <p className="author">{commentItem.author}</p>
        <p className="text">{commentItem.comment}</p>
      </div>
    ))}
  </div>
);
