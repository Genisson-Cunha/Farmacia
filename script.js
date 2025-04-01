let carrinho = [];

function addToCart(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoItens = document.getElementById("carrinho-itens");
    const carrinhoTotal = document.getElementById("carrinho-total");

    carrinhoItens.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("carrinho-item");
        itemDiv.innerHTML = `
            <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">❌</button>
        `;
        carrinhoItens.appendChild(itemDiv);
    });

    carrinhoTotal.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

document.getElementById("limpar-carrinho").addEventListener("click", () => {
    carrinho = [];
    atualizarCarrinho();
});

// Enviar pedido para WhatsApp
document.getElementById("enviar-whatsapp").addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "🛒 *Meu Pedido:*\n\n";
    let total = 0;

    carrinho.forEach((item) => {
        mensagem += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
        total += item.preco;
    });

    mensagem += `\n💰 *Total: R$ ${total.toFixed(2)}*`;

    const numeroWhatsApp = "5543984026621"; // Número no formato internacional
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
});

function addToCart(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();

    // Rolagem suave até o carrinho
    document.getElementById("carrinho").scrollIntoView({ behavior: "smooth" });
}


function searchMedicine() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let produtos = document.querySelectorAll(".product");
    let encontrou = false; // Verifica se algum produto corresponde à pesquisa

    produtos.forEach(produto => {
        let nomeProduto = produto.innerText.toLowerCase();

        if (nomeProduto.includes(input) && input !== "") {
            produto.style.display = "block"; // Exibe os produtos encontrados
            produto.classList.add("destaque"); // Aplica o efeito de destaque
            encontrou = true;
        } else {
            produto.style.display = "none"; // Oculta os que não correspondem
            produto.classList.remove("destaque");
        }
    });

    // Se encontrou algum produto, desce até a seção de promoções
    if (encontrou) {
        document.getElementById("promocoes").scrollIntoView({ behavior: "smooth" });
    }
}
document.getElementById("search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchMedicine(); // Chama a função de pesquisa ao pressionar Enter
    }
});




  window.onscroll = function () {
    const btn = document.getElementById("btnTopo");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


