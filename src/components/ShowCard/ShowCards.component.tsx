import React from 'react';
import { ShowCardsProps } from '../Interface';

export default function ShowCards(props: ShowCardsProps) {
  return (
    <article className={props.itemClassName} key={props.itemId}>
      <a href={props.itemLink}>
        {!props.itemImg ? null : (
          <img src={props.itemImg} alt={props.itemTitle} />
        )}
        <h2>{props.itemTitle}</h2>
        {!props.recipeTime ? null : <p>Time : {props.recipeTime}</p>}
        {!props.recipePortion ? null : <p>Time : {props.recipePortion}</p>}
      </a>
    </article>
  );
}
