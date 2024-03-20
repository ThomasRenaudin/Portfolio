const backgroundContainer = document.getElementById('background-container');
const backgroundImg = document.getElementById('background-img');

backgroundContainer.addEventListener('mousemove', (e) => {
    const x = e.pageX - backgroundContainer.offsetLeft;
    const y = e.pageY - backgroundContainer.offsetTop;

    const centerX = backgroundContainer.offsetWidth / 2;
    const centerY = backgroundContainer.offsetHeight / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    backgroundImg.style.transform = `translate(-50%, -50%) scale(${1 + deltaX * 0.1}, ${1 + deltaY * 0.1})`;
});
