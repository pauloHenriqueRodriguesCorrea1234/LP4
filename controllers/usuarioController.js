const Usuario = require("../models/Usuario");

const userController = {
  async getAllUsuarios(req, res) {
    // Método para retornar todos os usuários
    const usuarios = await Usuario.find(); // Chama o método para retornar todos os usuários
    res.json(usuarios);
  },

  async createUsuario(req, res) {
    const newUser = new Usuario(req.body)
    const userSaved = await newUser.save();
    res.json(userSaved)
  },

  async updateUsuario(req, res) {
    const cpf = req.params.cpf;
    const userUpdated = await Usuario.findByIdAndUpdate(cpf, req.body)
    res.json(userUpdated);
  },

  async deleteUsuario(req, res) {
    const cpf = req.params.cpf;
    const userDeleted = await Usuario.findByIdAndDelete(cpf, res.body);
    res.json(userDeleted);
  },
};

module.exports = userController;
