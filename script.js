const card = document.querySelector('.card');
const number = document.querySelector('.number');
const button = document.getElementById('new-card');

const generateRandomNumber = () => {
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const resultNumbers = Math.floor(Math.random() * numbers.length);

    return numbers[resultNumbers];
};

const generateRandomSuit = () => {

    const suit = ["diamond", "spade", "heart", "club"];
    const resultSuit = Math.floor(Math.random() * suit.length);
    return suit[resultSuit];
};

const generateNewCard = () => {
    card.classList.remove('spade', 'heart', 'diamond', 'club');
    card.classList.add(generateRandomSuit());
    number.textContent = generateRandomNumber();
};

window.onload = generateNewCard;

button.addEventListener('click', generateNewCard);
setInterval(generateNewCard, 5000);