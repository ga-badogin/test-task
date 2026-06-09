import cls from './card.module.scss'
import { capitalize } from '../../../utils/utils.js'

export function createCard({ title, price, author, tag, image }) {
  const card = document.createElement('div')
  card.className = cls.card

  const capitalizedTag = capitalize(tag)

  card.innerHTML = `
    <img src="${image}" alt="Cover of ${title}">
    
    <div class="${cls.content}">
    
      <span class="${cls.tag} ${cls[tag]}">
        ${capitalizedTag}
      </span>
      
      <h3 class="${cls.title}">
        ${title}
      </h3>
      
      <div class="${cls.footer}">
      
        <span class="${cls.price}">
          $${price}
        </span>
        
        <span class="${cls.author}">
          | by ${author}
        </span>
        
      </div>
      
    </div>
  `

  return card
}
