function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius){
    return (celcius * 9) / 6 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
};