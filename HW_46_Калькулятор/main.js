const range = document.getElementById('range');
const number = document.getElementById('number');
const greenBlock = document.getElementById('greenBlock');
const redBlock = document.getElementById('redBlock');

range.addEventListener('input', function () {
    number.value = range.value;
});
number.addEventListener('input', function () {
    range.value = number.value;
});

range.addEventListener('input', updateValues);
number.addEventListener('input', updateValues);

function updateValues() {
    const value = parseInt(range.value);
    const greenHeight = value;
    greenBlock.style.height = `${greenHeight}px`;

    let commission = 0;
    if (value < 20) {
        commission = 2;
    } else if (value >= 20 && value < 50) {
        commission = 4;
    } else if (value >= 50 && value < 75) {
        commission = 6;
    } else if (value >= 75 && value <= 100) {
        commission = 8;
    }

    const redHeight = commission;
    redBlock.style.height = `${redHeight}px`;

    const result = value + commission;
    console.log('Результативна сума:', result);
}

updateValues();
