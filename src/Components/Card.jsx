import React, { useState } from "react";

import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Card.css";

const Card = (props) => {
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
        <p class="card__description gap-5 ">
          <a className="md:text-xl text-base" href={props.linkTo}>
            Github
          </a>
          <a className="md:text-xl text-base" href={props.visit}>Visit</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
