document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Aqui você pode salvar no localStorage ou enviar para um backend futuramente
  alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}!`);

  // Redirecionar, se quiser:
  // window.location.href = "login.html";
});
