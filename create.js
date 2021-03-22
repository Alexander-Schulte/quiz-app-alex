const button = document.querySelectorAll('button')
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
