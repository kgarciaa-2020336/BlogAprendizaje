import { useState } from "react";

export const CommentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ author: "", comment: "" });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ author: "", comment: "" });
    };

    return (
        <form onSubmit={handleFormSubmit} className="comment-form">
            <input
                name="author"
                placeholder="Tu nombre"
                value={formData.author}
                onChange={handleInputChange}
                required
            />
            <textarea
                name="comment"
                placeholder="Comentario"
                value={formData.comment}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};