import { FC } from 'react';

export type ShowDateProps = {
  date: Date;
}

const ShowDate: FC<ShowDateProps> = ({ date }) => {   
  let newDate:Date = new Date(date);
  let result: string = newDate.toLocaleDateString('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}); 
  return (
    <div>
      <p>at : {result}</p>
    </div>
  )
}

export default ShowDate;
