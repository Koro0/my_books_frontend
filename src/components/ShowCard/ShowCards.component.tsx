import { ShowCardsProps } from '../Interface';
import ShowDate from '../utils/showDate.component';

export default function ShowCards(props: ShowCardsProps) {
  return (
    <article className={props.itemClassName} key={props.itemId}>
      <a href={props.itemLink}>
        {!props.itemImg ? null : (
          <img src={props.itemImg} alt={props.itemTitle} />
        )}
        <h2>{props.itemTitle}</h2>
        {!props.itemDate ? null : <ShowDate date={props.itemDate} />}
      </a>
    </article>
  );
}
