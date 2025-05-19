import Comment from './comment.model.js';

export const addComment= async (req, res) => {
    try {
        const data= req.body;

        if(!data){
            return res.status(400).send({ success: false, message: 'No data provided' });
        }

        const comment = new Comment(data);
        await comment.save();

        return res.send({ success: true, message: 'Comment added successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error saving comment', error });
    }
};


export const getCommentsByPost = async (req, res) => {
    try {
        const { publicationId } = req.params;

        const comments = await Comment.find({ publication: publicationId });

        return res.send({ success: true, message: 'Comments found', comments });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error getting comments', error });
    }
};