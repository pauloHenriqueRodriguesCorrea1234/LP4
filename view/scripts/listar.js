// Use JavaScript para buscar e exibir os registros dinamicamente.
fetch("/api/data") // Buscar registros
  .then((response) => response.json()) // Transformar a resposta em JSON
  .then((data) => {
    // Pegar os dados
    const usuariosDiv = document.getElementById("usuarios"); // Pegar a div onde os registros serão exibidos
    data.forEach((usuario) => {
      // Para cada registro, crie uma linha na tabela
      const tr = document.createElement("tr"); // Criar uma linha
      tr.innerHTML = ` <!-- Preencher a linha com os dados do registro -->
                        <td>${usuario.cpf}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.email}</td>
                        <td><button class="delete-button" data-cpf="${usuario.cpf}">Deletar</button></td> <!-- Botão de deletar -->
                    `;
      usuariosDiv.appendChild(tr); // Adicionar a linha na tabela
    });

    // Adicione um evento de clique a cada botão de deletar
    document.querySelectorAll(".delete-button").forEach((button) => {
      // Para cada botão de deletar
      button.addEventListener("click", function () {
        // Adicione um evento de clique
        const cpf = this.getAttribute("data-cpf"); // Pegar o ID do registro
        fetch(`/api/data/${cpf}`, {
          // Deletar o registro
          method: "DELETE", // Método DELETE
        }) // Transformar a resposta em JSON
          .then((response) => response.json()) // Pegar os dados
          .then((data) => {
            // Exibir uma mensagem de sucesso
            alert(`Usuário deletado com sucesso: ${data.nome}`); // Exibir uma mensagem de sucesso
            window.location.reload(); // Recarregar a página
          });
      });
    });
  })
  .catch((error) => console.error("Erro ao buscar registros:", error)); // Exibir erros no console
