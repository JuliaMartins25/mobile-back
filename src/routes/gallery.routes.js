import express from "express";
import GalleryController from "../controllers/gallery.controller.js";

const galleryRouter = express.Router();

// Rotas da Galeria 

galleryRouter.get("/", GalleryController.findAll);

galleryRouter.post("/", GalleryController.create);

export default galleryRouter;