window.onload = () => {
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.number').textContent = generateRandomNumber();

};

const generateRandomNumber = () => {
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
    const resultNumbers = Math.floor(Math.random() * numbers.length);
    
    return numbers[resultNumbers];
};

const generateRandomSuit = () => {

    const suit = ["diamond", "spade", "heart", "club"]; 
    const resultSuit = Math.floor(Math.random() * suit.length);
    return suit[resultSuit];
};