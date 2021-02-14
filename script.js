const cap = document.querySelector('.cap');
const container = document.querySelector('.container');

const leftOpen = e => {
    setTimeout(() => {
        cap.classList.toggle('left');
    }, 100);
    setTimeout(() => {
        cap.classList.toggle('left-open');
    }, 150);
}

cap.classList.add('left');
cap.addEventListener('click', leftOpen);