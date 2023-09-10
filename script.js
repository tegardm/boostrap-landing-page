const btnToggle = document.getElementById('toggleMode');
const navEl = document.querySelector('nav');
const listGroup = document.querySelectorAll('.list-group-item');
const alerts = document.querySelectorAll('.alert');
const cards = document.querySelectorAll('.card-body');
const accordions = document.querySelectorAll('.accordion-item');
const accordionsBtn = document.querySelectorAll('.accordion-button');
const btnTogglerNav = document.querySelector('.navbar-toggler');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('toggleBody');
    navEl.classList.toggle('toggleNav');
    btnTogglerNav.classList.toggle('togglerNav');

    listGroup.forEach(list => {
        list.classList.toggle('toggleNav');
    })

    alerts.forEach(alert => {
        alert.classList.toggle('toggleNav');
    })

    cards.forEach(card => {
        card.classList.toggle('toggleNav');
        card.parentElement.classList.toggle('toggleNav')
    })

    accordions.forEach(accord => {
        accord.classList.toggle('toggleNav');
    })


    accordionsBtn.forEach(accordBtn => {
        accordBtn.classList.toggle('toggleNav');
    })
})