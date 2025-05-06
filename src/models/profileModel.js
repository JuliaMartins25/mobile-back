import prisma from "../../prisma/prisma.js";

class profileModel {
  // Obter todos os usuários
  async findAll() {
    const profiles = await prisma.profile.findMany();

    return profiles;
  }

  // Obter um usuário pelo ID
  async findById(id) {
    const profile = await prisma.profile.findUnique({
      where: {
        id: Number(id),
      },
    });

    return profile;
  }

  // Obter um usuário pelo email
  async findByEmail(email) {
    const profile = await prisma.profile.findUnique({
      where: {
        email,
      },
    });

    return profile;
  }

  // Criar um novo usuário
  async create(data) {
    const profile = await prisma.profile.create({
      data,
    });

    return profile;
  }

  // Atualizar um usuário
  async update(id, data) {
    const profile = await prisma.profile.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return profile;
  }

  // Excluir um usuário
  async delete(id) {
    await prisma.profile.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new profileModel();
