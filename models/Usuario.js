const mondoose = require("mongoose");

const Schema = mondoose.Schema;

const userSchema = new Schema({
  name: String,
  cpf: String,
  email: String,
});

module.exports = mondoose.model("Usuario", userSchema);
