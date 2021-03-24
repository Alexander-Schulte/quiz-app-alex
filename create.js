import { pushSection } from './styles/lib/db.js'

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const questionInput = form['question'].value
  const answerInput = form['answer'].value
  const hashtagInput = form['hashtag']
  const hashtagInputArray = itemsStringToArray(hashtagInput.value)

  const input = {
    question: questionInput,
    answer: answerInput,
    hashtag: hashtagInputArray,
  }

  pushSection(input)

  form.reset()
  alert('Section done!')
})

function itemsStringToArray(hashtagString) {
  const itemsArray = hashtagString.split(',')

  return itemsArray
}

/* const button = document.querySelectorAll('button')
const form = document.querySelector('form')
const data = []

form.addEventListener('submit', event => {
  event.preventDefault()

  const Card = {
    inputForQuestion: form['question'].value,
    inputForHashtag: form['hashtag'].value,
  }

  data.push(Card)
  console.log(data)

  form.reset()
}) 
*/
