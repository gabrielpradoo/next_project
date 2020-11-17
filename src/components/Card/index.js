import React from 'react';
import { IconType } from 'react-icons';

import { CardContainer, CardContent, CardImage } from './styles';

/* const { day, titles, content, image } = infos; */

function Card({ infos }) {
  function propReturn() {
    if (infos.titles.length === 1 || infos.icons.length === 1) {
      return (
        <>
          <h2>{infos.titles}</h2>
          {/* {infos.icons} */}
          <div
            className="img"
            style={{
              background: `url(${infos.icons}) center 37%`,
            }}
          ></div>
        </>
      );
    } else {
      for (let i = 0; i < infos.titles.length; i++) {
        return (
          <>
            <h2>{infos.titles}</h2>
            <div
              className="img"
              style={{
                background: `url(${infos.icons}) center 37%`,
              }}
            ></div>
          </>
        );
      }
    }
    /*       {infos.icons.map((info) => (
        <img src={`${info}`} alt="" />
      ))} */
  }

  return (
    <CardContainer>
      <CardContent>
        <header>
          <div className="header-content">{propReturn()}</div>
        </header>

        <main>
          <p>{infos.content}</p>
        </main>
      </CardContent>

      <CardImage>
        <div
          className="img"
          style={{
            background: `url(${infos.image}) center 37%`,
          }}
        ></div>
      </CardImage>
    </CardContainer>
  );
}

export default Card;
