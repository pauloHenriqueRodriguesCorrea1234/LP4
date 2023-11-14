// // Início do código para salvar dados do usuário
// Use fetch para enviar os dados do formulário para a API quando o formulário for enviado
document
  .getElementById("usuarioForm")
  .addEventListener("submit", function (event) {
    // quando o formulário for enviado
    event.preventDefault(); // previne o comportamento padrão do formulário

    const cpf = Number(document.getElementById("cpf").value); // pega o valor do campo cpf
    const nome = document.getElementById("nome").value; // pega o valor do campo nome
    const email = document.getElementById("email").value; // pega o valor do campo email

    fetch("/api/data", {
      // envia os dados do formulário para a API
      method: "POST", // método POST
      headers: {
        // cabeçalho
        "Content-Type": "application/json", // tipo de conteúdo JSON
      },
      body: JSON.stringify({ cpf, nome, email }), // transforma os dados do formulário em JSON
    })
      .then((response) => response.json()) // transforma a resposta em JSON
      .then((data) => {
        // pega os dados
        alert(`Usuário salvo com sucesso: ${data.nome}`); // exibe um alerta com o nome do usuário salvo
        window.location.reload(); // Recarregar a página
      });
  });
// // Fim do código para salvar dados do usuário
