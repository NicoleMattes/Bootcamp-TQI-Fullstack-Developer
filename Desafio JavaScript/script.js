const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let fistCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

