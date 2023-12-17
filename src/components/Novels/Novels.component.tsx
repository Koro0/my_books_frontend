import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Novel } from '../Interface';
import ShowCards from '../ShowCard/ShowCards.component';

export default function ShowNovels() {
  const [novels, setNovels] = useState<Novel[]>();

  useEffect(() => {
    const fetchNovels = async () => {
      await axios
        .get('http://localhost:3500/api/novel/')
        .then((res) => {
          const response = res.data;
          console.log(response.data);
          if (response) {
            setNovels(response.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchNovels();
  }, []);

  return (
    <div className="novelList">
      {novels &&
        novels.map((data) => {
          const novelPage = '/novels/' + data.novelId;
          return (
            <ShowCards
              itemId={data.novelId}
              itemLink={novelPage}
              itemImg={data.image}
              itemTitle={data.title}
              itemClassName={'novelList_item'}
            />
          );
        })}
      {!novels && <h2>Oups, aucun novel retrouvé</h2>}
    </div>
  );
}
