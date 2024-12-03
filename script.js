documsent.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".filtered-product-card");

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("expanded");
            const siblingCards = getSiblings(card);
            siblingCards.forEach(siblingCard => {
                siblingCard.classList.add("shrink");
            });
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("expanded");
            const siblingCards = getSiblings(card);
            siblingCards.forEach(siblingCard => {
                siblingCard.classList.remove("shrink");
            });
        });
    });

    // Function to get direct siblings of an element
    function getSiblings(elem) {
        const siblings = [];
        let sibling = elem.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    }
});
