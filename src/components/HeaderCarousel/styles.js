import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  position: relative;

  > .buttons {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 90%;
    height: 20vh;
    z-index: 999;

    margin-left: 40px;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;

    > .prev,
    .next {
      width: 80px;
      height: 120px;

      background: ${(props) => props.theme.colors.colorGreenS};
      color: ${(props) => props.theme.colors.colorYellowS};

      border: none;

      text-align: center;

      border-radius: 8px;

      font-size: 3rem;

      outline: none;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  #items {
    display: flex;

    overflow-x: auto;
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

      background: rgba(0, 0, 0, 0.8);

      display: flex;
      justify-content: center;
      align-items: center;

      > h3 {
        text-align: center;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 700;
        color: ${(props) => props.theme.colors.colorYellowS};
      }

      > button {
        z-index: 10;
        width: 40px;
        height: 40px;
        color: white;
        background-color: #000;
        :hover {
          color: yellow;
          background-color: green;
        }
      }
    }
  }

  #items > .item > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
