import React from 'react'
import './Card.css'

const GameingCard = (props) => {
  return (

    <div class="card">
      {props.img ? (<img
        src={props.img ||"Image Loading Error"}
        alt=""
      />):(<img
        src=""
        alt="Image Loading Error"
      />)}
      
      <div class="card__content">
        <p class="card__title">{props.title}</p>
        <p class="card__description gap-5  ">
          <a className="md:text-xl text-base" href={props.desktop}>
            Desktop
          </a>
          <a className='md:text-xl text-base' href={props.android}>Android</a>
        </p>
      </div>
    </div>
  

  )
}

export default GameingCard