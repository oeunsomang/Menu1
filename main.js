const services = document.querySelector('.services');
const portfolios = document.querySelector('.portfolios');

const hamburger = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_content');
const logo = document.querySelector('.navbar_logo a');

logo.addEventListener('click', (e) => {
    e.preventDefault();
})

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

services.addEventListener('click', () => {
    portfolios.classList.remove('active');
    services.classList.toggle('active');
});
portfolios.addEventListener('click', () => {
    services.classList.remove('active');
    portfolios.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if(!e.target.closest('.services')) services.classList.remove('active');
    if(!e.target.closest('.portfolios')) portfolios.classList.remove('active');
});
// document.activeElement('click', () => {
//     if(
//         e.target.matches('.services') || !e.target.closest('.services')
//       ){
//             services.classList.remove('active');
//     }
//     if(
//         e.target.matches('.portfolios') || !e.target.closest('.portfolios')
//       ){
//             portfolios.classList.remove('active');
//     }
// });

