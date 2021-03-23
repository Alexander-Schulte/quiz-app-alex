import { data } from './styles/lib/db.js'
import { createCard } from './styles/lib/card.js'

const content = document.querySelector('.container__content')

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  content.append(cardSection)
}
