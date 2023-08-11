const titleBtn = document.querySelector('.info .metadata .titleAndButton .titleBtn');
const title = document.querySelector('.info .metadata .titleAndButton .title');

titleBtn.addEventListener('click', () => {
    titleBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});