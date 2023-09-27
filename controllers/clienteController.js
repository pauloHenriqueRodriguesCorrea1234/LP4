const Cliente = require('../models/Cliente');
const clienteModel = new Cliente();

const clienteController = {
  async getAllClientes(req, res) { // Método para retornar todos os usuários
    const clientes = await clienteModel.getAllClientes(); // Chama o método para retornar todos os usuários
    res.json(clientes);
  },

  async createCliente(req, res) {
    const { nome, telefone, email, cpf } = req.body;
    const novoCliente = await clienteModel.createCliente(nome, telefone, email, cpf); // Chama o método para criar um novo usuário
    res.json(novoCliente);
  },

  async updateCliente(req, res) {
    const cpf = req.params.cpf
    const { nome, telefone, email } = req.body;
    const clienteAtualizado = await clienteModel.updateCliente(nome, telefone, email, cpf);
    res.json(clienteAtualizado);
  },

  async deleteCliente(req, res) {
    const cpf = req.params.cpf;
    const clienteExcluido = await clienteModel.deleteCliente(cpf);
    res.json(clienteExcluido);
  }
};

module.exports = clienteController;