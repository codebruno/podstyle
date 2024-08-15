document.addEventListener('DOMContentLoaded', function() {
    const cards = Array.from(document.querySelectorAll('.product-card'));
    const loadMoreBtn = document.getElementById('load-more');
    let visibleCount = 4;

    function updateCards() {
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    loadMoreBtn.addEventListener('click', () => {
        visibleCount += 4;
        updateCards();
    });

    updateCards(); // Initialize the visibility of cards
});
