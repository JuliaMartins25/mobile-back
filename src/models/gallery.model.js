import prisma from "../../prisma/prisma.js";

class GalleryModel {
  // Obter todos os recordes
  async findAll() {
      const gallerys = await prisma.gallery.findMany();

          return{
              total: gallerys.length,
              gallerys,
          };
          
      }

      // Criar um novo recorde
      async create(data) {
          const gallery = await prisma.gallery.create({
              data,
          });

          return gallery;
      }
}

export default new GalleryModel();