import { getSections } from './styles/lib/db.js'
import { createCard } from './styles/lib/card.js'

const content = document.querySelector('.container__content')

const data = getSections()

const filteredCards = createCard.filter((bookmark) => {

  if(bookmark === 'black') {
    
    for (let i = 0; i < data.length; i++) {
    const cardSection = createCard(data[i])
    content.append(cardSection)
  }
}
  
/*
const bookmarks = document.querySelectorAll(
  '.container__content__card--bookmark-icon'
)

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('javaScript__icon')
  })
})

const answerButtons = document.querySelectorAll('button')
const answerFields = document.querySelectorAll('.answer')

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerFields[i].classList.toggle('hidden')
    if (answerButtons[i].innerHTML === 'Hide Answer') {
      answerButtons[i].innerHTML = 'Show Answer'
    } else {
      answerButtons[i].innerHTML = 'Hide Answer'
    }
  })
}

// cards.forEach(answerButton => {
//answerButton.addEventListener('click', () => {
// answerFields.classList.toggle('hidden')
//})
//})

// if (answerButton.textContent === 'Show Answer') {
//  answerButton.textContent = 'Hide Answer'
// } else {
//  answerButton = 'Show Answer'
// }
*/
