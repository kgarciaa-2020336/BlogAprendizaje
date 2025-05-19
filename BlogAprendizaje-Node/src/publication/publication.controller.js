import Publication from './publication.model.js';
import Comment from '../comment/comment.model.js';

export const addPublication = async (req, res) => {
    try {
        const data = req.body;

        const publication = new Publication(data);
        await publication.save();

        return res.send({ success: true, message: 'Publication added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error add publication', error });
    }
};

export const updatePublication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatePublication = await Publication.findByIdAndUpdate(id, data, { new: true });
        
        if(!updatePublication) {
            return res.status(404).send({ success: false, message: 'Publication not found' });
        }

        return res.send({ success: true, message: 'Publication updated successfully', updatePublication });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error updating publication', error });
    }
};

export const deletePublication = async (req, res) => {
    try {
        const { id } = req.params;

        const publication = await Publication.findById(id);

        if (!publication) {
            return res.status(404).send({ success: false, message: 'Publication not found' });
        }

        await Publication.findByIdAndDelete(id);

        return res.send({ success: true, message: 'Publication deleted successfully' });
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error deleting publication', error });
    }
};

export const listPublication = async (req, res) => {
    try {
        const publications = await Publication.find();

        return res.send({ success: true, message: 'Publication found', publications });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error listing publications', error });
    }
};

export const getCoursePublication = async (req, res) => {
    try {
        const { course } = req.params;

        const publications = await Publication.find({ course })

        if(!publications ){
            return res.status(404).send({ success: false, message: 'Not publications found for this course' });
        }

        return res.send({ success: true, message: `Course publication`, publications });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'Error publication ', error });
    }
};