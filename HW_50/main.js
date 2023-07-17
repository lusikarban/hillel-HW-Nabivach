const clickBut = document.getElementById('clickBut');
const counterInput = document.getElementById('counterInput');
const clearBut = document.getElementById('clearBut');

if (localStorage.getItem('counter')) {
    counterInput.value = localStorage.getItem('counter');
}

clickBut.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) + 1;
    localStorage.setItem('counter', counterInput.value);
});

clearBut.addEventListener('click', () => {
    counterInput.value = 0;
    localStorage.setItem('counter', counterInput.value);
});
