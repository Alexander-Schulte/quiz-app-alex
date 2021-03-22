const button = document.querySelector('.darkMode')
const test = document.querySelector('.container__content')
const footer = document.querySelector('.container__content__footer')
const header = document.querySelector('.container__header')
const cards = document.querySelectorAll('.container__content__profile')

button.addEventListener('click', () => {
  test.classList.toggle('darkmode')
  footer.classList.toggle('darkmode_footer_header')
  header.classList.toggle('darkmode_footer_header')
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('darkmode_footer_header')
  }
})
