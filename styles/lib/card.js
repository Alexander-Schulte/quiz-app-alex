/*
{
  id: 0,
    question: 'What type of a language is HTML?',
    answer: 'Markup Language',
    isBookmarked: true,
    tags: ['HTML', 'general'],
}
*/

export function createCard(card) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('container__content__card')

  /* const anker = document.createElement('a') */
  const bookmarkElement = document.createElement('i')
  bookmarkElement.classList.add(
    'fas',
    'fa-bookmark',
    'container__content__card--bookmark-icon'
  )
  bookmarkElement.style.color = 'white'
  cardSection.append(bookmarkElement)

  bookmarkElement.addEventListener('click', () => {
    if (bookmarkElement.style.color === 'white') {
      bookmarkElement.style.color = 'black'
    } else {
      bookmarkElement.style.color = 'white'
    }
  })

  /* create the Question */
  const questionElement = document.createElement('p')
  questionElement.textContent = card.question

  cardSection.append(questionElement)

  /* create the Button */
  const answerButton = document.createElement('button')
  answerButton.classList.add(
    'container__content__card__div-button__answer-button',
    'button'
  )
  answerButton.textContent = 'Show answer!'
  const answerElement = document.createElement('p')

  answerButton.addEventListener('click', () => {
    if (answerButton.innerHTML === 'Show answer!') {
      answerButton.innerHTML = 'Hide answer!'
      answerElement.textContent = card.answer
      cardSection.append(answerElement)
    } else {
      answerButton.innerHTML = 'Show answer!'
      answerElement.remove()
    }
  })

  cardSection.append(answerButton)

  /* create the Tag-List */
  const ulElement = document.createElement('ul')
  ulElement.classList.add('container__content__card__tags')

  cardSection.append(ulElement)

  /* create the specific list-items */
  for (let i = 0; i < card.hashtag.length; i++) {
    const listItemElement = document.createElement('li')
    listItemElement.classList.add('container__content__card__tags__tag-item')
    listItemElement.textContent = card.hashtag[i]
    ulElement.append(listItemElement)
  }

  return cardSection
}

/*
   <section class="container__content__card">
          <h2>Question5</h2>
          <a
            ><i
              class="fas fa-bookmark container__content__card--bookmark-icon"
            ></i
          ></a>
          <p>kfemwelkfmlekmflwemkflnnknkwmflmflmf</p>

          <div class="container__content__card__div-button">
            <button
              class="container__content__card--div-button__answer-button--active container__content__card__div-button__answer-button"
            >
              Show Answer
            </button>
            <div class="answer hidden">Here is answer 5</div>
          </div>
          <ul class="container__content__card__tags">
            <li class="container__content__card__tags__tag-item">tag1</li>
            <li class="container__content__card__tags__tag-item">tag2</li>
            <li class="container__content__card__tags__tag-item">tag3</li>
          </ul>
        </section>
  */
