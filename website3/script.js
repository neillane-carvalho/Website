let carrinho = [];
let total = 0;

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item: item, preco: preco });
    alert(item + " foi adicionado ao carrinho!");

    // Atualizar total do carrinho
    total += preco;

    // Armazena o carrinho e o total no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("total", total);
}

document.addEventListener("DOMContentLoaded", function () {
    const carrinhoItens = document.getElementById("carrinho-itens");
    const carrinhoTotal = document.getElementById("carrinho-total");

    const carrinhoArmazenado = JSON.parse(localStorage.getItem("carrinho")) || [];
    const totalArmazenado = localStorage.getItem("total") || 0;

    carrinho = carrinhoArmazenado;
    total = parseFloat(totalArmazenado);

    if (carrinhoArmazenado.length > 0) {
        carrinhoArmazenado.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.item} - R$ ${item.preco.toFixed(2)}`;
            carrinhoItens.appendChild(li);
        });

        carrinhoTotal.textContent = total.toFixed(2);
    }
});

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
        carrinho = [];
        total = 0;
        localStorage.removeItem("carrinho");
        localStorage.removeItem("total");
        window.location.href = "index.html";
    }
}
