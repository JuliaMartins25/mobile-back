import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import galleryRouter from "./gallery.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/gallery", galleryRouter);

// Rotas protegidas
router.use(authMiddleware);


export default router;
