document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("#filtro-produtos input[type='checkbox']");
  const produtos = document.querySelectorAll(".produto");

  function filtrarProdutos() {
    const categoriasSelecionadas = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id);

    produtos.forEach(produto => {
      const visivel = categoriasSelecionadas.some(cat => produto.classList.contains(cat));
      produto.style.display = visivel ? "block" : "none";
    });
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filtrarProdutos);
  });

  filtrarProdutos();
});