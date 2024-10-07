// Captura o botão de busca e o campo de input
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

// Captura todos os itens do menu (links)
const menuItems = document.querySelectorAll('#menu a');

// Adiciona um evento de clique ao botão de busca
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Pega o termo digitado e o transforma em minúsculas

    if (!searchTerm) {
        alert('Digite algo para buscar!'); // Verifica se o campo de busca está vazio
        return;
    }

    let found = false; // Flag para verificar se o item foi encontrado

    // Itera sobre os itens do menu
    menuItems.forEach(function(item) {
        const menuItemText = item.textContent.toLowerCase(); // Converte o texto do item do menu para minúsculas

        if (menuItemText.includes(searchTerm)) { // Verifica se o texto do item do menu contém o termo de busca
            found = true;
            window.location.href = item.href; // Se encontrar, redireciona para o link correspondente
        }
    });

    // Se nenhum item for encontrado, avisa o usuário
    if (!found) {
        alert('Nenhum item correspondente foi encontrado.');
    }
});

// Permite que a busca seja acionada também com a tecla Enter
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchButton.click(); // Simula um clique no botão de busca quando a tecla Enter for pressionada
    }
});
