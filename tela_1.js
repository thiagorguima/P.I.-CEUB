// Captura o formulário
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // impede que a página recarregue

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (email && senha) {
    // Aqui você pode integrar com back-end ou Firebase
    alert("Login realizado com sucesso!");

    // Exemplo: redirecionar para outra tela
    // window.location.href = "home.html";
  } else {
    alert("Preencha todos os campos.");
  }
});
