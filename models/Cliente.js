const { Client } = require('pg');
const dbConfig = {
  user: 'postgres',
  password: 'ifms',
  host: 'localhost',
  port: 5432,
  database: 'salao',

};

class Cliente { // Classe que representa a tabela Cliente do banco de dados
  async connectDB() { // Método para conectar ao banco de dados
    const client = new Client(dbConfig); // Cria uma nova conexão
    await client.connect();
    return client;
  }

  async getAllClientes() { // Método para retornar todos os usuários
    const client = await this.connectDB(); // Conecta ao banco de dados
    const result = await client.query('SELECT * FROM cliente'); // ***
    client.end();
    return result.rows;
  }

  async createCliente(nome, telefone, email, cpf) { // Método para criar um novo usuário
    const client = await this.connectDB();
    const result = await client.query('INSERT INTO cliente (nome, telefone, email, cpf) VALUES ($1, $2, $3, $4) RETURNING *', [nome, telefone, email, cpf]); // ***
    client.end();
    return result.rows[0];
  }

  async updateCliente(nome, telefone, email, cpf) { // Método para atualizar um usuário
    const client = await this.connectDB();
    const result = await client.query('UPDATE cliente SET nome = $1, telefone = $2, email = $3 WHERE cpf = $4 RETURNING *', [nome, telefone, email, cpf]); // **
    client.end();
    return result.rows[0];
  }

  async deleteCliente(cpf) { // Método para deletar um usuário
    const client = await this.connectDB(); // Conecta ao banco de dados
    const result = await client.query('DELETE FROM cliente WHERE cpf = $1 RETURNING *', [cpf]); // ***
    client.end();
    return result.rows[0];
  }
}

module.exports = Cliente;