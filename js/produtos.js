const produtos = [
  { id: 1, nome: "Teclado Gamer RGB", preco: 199.90 },
  { id: 2, nome: "Mouse Gamer", preco: 129.90 },
  { id: 3, nome: "Headset Gamer", preco: 299.90 }
];

const grid = document.getElementById("grid");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <button onclick="adicionar(${produto.id})">Adicionar</button>
  `;

  grid.appendChild(card);
});

function adicionar(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho");
}
