// Início do código para atualizar dados do usuário
// Use fetch para enviar os dados do formulário para a API quando o formulário for enviado
document.getElementById("usuarioForm").addEventListener("submit", (event) => {
  // quando o formulário for enviado
  event.preventDefault(); // previne o comportamento padrão do formulário

  const cpf = Number(document.getElementById("cpf").value); // pega o valor do campo id
  const nome = document.getElementById("nome").value; // pega o valor do campo nome
  const email = document.getElementById("email").value; // pega o valor do campo email

  fetch(`/api/data/${cpf}`, {
    // envia os dados do formulário para a API
    method: "PUT", // método HTTP usado
    headers: {
      // cabeçalho
      "Content-Type": "application/json", // tipo de conteúdo JSON
    },
    body: JSON.stringify({ nome, email }), // transforma os dados do formulário em JSON
  })
    .then((response) => response.json()) // transforma a resposta em JSON
    .then((data) => {
      // pega os dados
      alert(`Usuário atualizado com sucesso: ${data.nome}`); // exibe um alerta com o nome do usuário atualizado
      window.location.reload(); // Recarregar a página
    });
});
// Fim do código para atualizar dados do usuário
