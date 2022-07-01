const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Função para virar a carta
function flipCard() {
    if(lockBoard) 
        return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

// Função para checar se as cartas são iguais 
function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disabreCards();
        return;
    }

    unflipCards();
}

// Função que desabilita as cartas 
function disabreCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Função que desvira as cartas 
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Função que reseta o tabuleiro 
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// função de embaralhar as cartas 
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 42); 
        // Essa variavél ira sortiar e um numero de 0 a 42
        card.style.order = ramdomPosition;
    })
})();

// Adicionar um evento ao clicar na carta 
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

