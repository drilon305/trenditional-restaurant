const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')


btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open')
})
