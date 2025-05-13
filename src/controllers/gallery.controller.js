import GalleryModel from "../models/gallery.model.js";

class GalleryController {

    async findAll(req, res) {
        try {
            const gallerys = await GalleryModel.findAll();

            return res.status(200).json(gallerys);
        } catch (error) {
            console.error("Error finding all pictures from gallery:", error);
            return res.status(500).json({ message: "Error finding all pictures from gallery:", error });
            
        }
    }

    // POST /records
    async create(req, res) {
        try {
            const { pictures, profileId } = req.body;

            // Validação básica
            if (!pictures || !profileId) {
                return res.status(400).json({ error: "pictures and profileId fields are required" });
            }

            const data = {
                pictures,
                profileId,
            };

            const newRecord = await GalleryModel.create(data);
            return res.status(201).json({
                message: "new photo was posted",
                newRecord,
            });
        } catch (error) {
            console.error("Error posted new photo:", error);
            res.status(500).json({ error: "Error posted new photo" });
        }
    }
};

export default new GalleryController();