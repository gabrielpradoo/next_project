import styled from 'styled-components';
import theme from '../../styles/theme';

export const CardsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 45px auto;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Card = styled.div`
  margin: 40px auto;
  width: 100%;
  border: 1px solid white;
  height: 650px;

  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: start;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  border-radius: 8px;
  transition: 0.3s;

  :hover {
    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.9);
  }

  /*
  :hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.9);
  } */

  .img {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;

    /* Descobrir como melhorar o size e align do carrosel */
    > .carrosel {
      width: 92%;
      height: 60%;
      > div {
        width: 100%;
        height: 100%;

        > img {
          display: block;
          width: 50%;
          height: 100%;
          margin: 0 auto;
        }
      }
    }
  }

  #items-wrapper {
    width: 100vw;

    > h1 {
      z-index: 2;
      color: #fff;
      position: absolute;
      text-align: center;
      width: 100vw;
      height: 400px;
      padding-top: 195px;
    }

    .items {
      z-index: 1;
      display: flex;
      overflow-x: auto;

      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;

      ::-webkit-scrollbar-track {
        border-bottom-right-radius: 8px;
        background-color: ${theme.palette.primary.main};
      }
      ::-webkit-scrollbar {
        height: 12px;
        border-bottom-right-radius: 8px;
        width: 6px;
        background: #f4f4f4;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: ${theme.palette.secondary.main};
      }

      .item {
        flex: none;
        border-top-right-radius: 8px;
        width: 100%;
        height: 636px;

        scroll-snap-align: start;
        pointer-events: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 7px;
      object-fit: cover;
    }
  }
  @media (max-width: 950px) {
    #items-wrapper {
      width: 80%;
      height: 100%;

      > h1 {
        z-index: 2;
        color: #fff;
        position: absolute;
        text-align: center;
        width: 100vw;
        height: 400px;
        padding-top: 195px;
      }

      .items {
        display: flex;
        overflow-x: auto;

        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;

        .item {
          flex: none;

          width: 100%;
          height: 403px;

          scroll-snap-align: start;
          pointer-events: none;
        }
      }

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }
`;

export const CardBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const CardBarContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const CardFront = styled.div`
  z-index: 10;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${theme.palette.primary.light};
  color: ${theme.palette.secondary.light};
  font-weight: 600;

  border-right: 1px solid white;

  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  width: 100%;
  height: 100%;

  > header {
    display: flex;

    border-top-left-radius: 7px;
    background-color: ${theme.palette.primary.dark};
    height: 55px;
    margin-bottom: 30px;

    > h3 {
      display: flex;
      width: 25%;
      height: 65px;
      background: ${theme.palette.primary.main};

      justify-content: center;
      align-content: center;

      color: white;
      font-size: 1.7rem;
      text-align: center;
      font-weight: 600;

      padding: 3% 0;

      margin: 0 18px;
    }

    .card-titles {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      > .description {
        height: 24px;
        display: flex;
        align-items: center;

        > h3 {
          width: 100%;
        }

        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 24px;
          margin: 0 4px;
        }
      }
    }
  }

  .card-content {
    padding: 25px;

    > p {
      font-size: 1.1rem;
      text-align: justify;
      padding: 8px;
    }

    > ul {
      padding: 24px;

      > li {
        font-size: 1rem;
      }
    }
  }
`;
