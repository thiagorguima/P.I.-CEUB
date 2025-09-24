document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Abrir: " + card.innerText);
    // Aqui você pode redirecionar para outra página
    // window.location.href = "pagina.html";
  });
});