document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.getElementById('load-more');
    const productCards = document.querySelectorAll('.product-cards .card');
    let visibleCards = 4;

    // Inicialmente, esconder todos os cards além dos 4 primeiros
    productCards.forEach((card, index) => {
        if (index >= visibleCards) {
            card.classList.add('hidden');
        }
    });

    loadMoreButton.addEventListener('click', () => {
        // Mostrar mais 4 cards
        visibleCards += 4;

        productCards.forEach((card, index) => {
            if (index < visibleCards) {
                card.classList.remove('hidden');
            }
        });

        // Se todos os cards estiverem visíveis, esconder o botão "Carregar Mais"
        if (visibleCards >= productCards.length) {
            loadMoreButton.classList.add('hidden');
        }
    });
});
