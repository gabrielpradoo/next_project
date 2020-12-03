import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  z-index: 5;

  position: relative;

  > .buttons {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    width: 90%;
    height: 20vh;
    z-index: 10;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    > .prev,
    .next {
      width: 80px;
      height: 120px;

      background: ${theme.palette.primary.main};
      color: ${theme.palette.secondary.main};

      border: none;

      text-align: center;

      border-radius: 8px;

      font-size: 3rem;

      outline: none;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        background-color: ${theme.palette.primary.light};
        border: 1px solid ${theme.palette.secondary.light};
      }
    }
  }

  #items {
    display: flex;

    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    --webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  #items > .item {
    flex: none;

    width: 100%;
    height: 700px;

    scroll-snap-align: start;
    pointer-events: none;

    position: relative;

    > .opacity {
      z-index: 5;
      position: absolute;

      height: 100%;
      width: 100%;

      background: rgba(0, 0, 0, 0.5);

      display: flex;
      justify-content: center;
      align-items: center;

      > h2 {
        color: white;
        font-size: 3rem;
        margin: 0 12px;

        text-align: center;
      }

      > .line {
        width: 15%;
        height: 1px;
        border: 1px solid #fff;
        padding: 0 12px;

        border-radius: 8px;
      }

      /* > button {
        z-index: 10;
        width: 40px;
        height: 40px;
        color: white;
        background-color: #000;
        :hover {
          color: yellow;
          background-color: green;
        }
      } */
    }
  }

  #items > .item > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
