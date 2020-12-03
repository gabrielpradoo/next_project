import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Main = styled.main`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 20px auto;

  @media (max-width: 1440px) {
    padding: 24px;
  }
`;

export const AboutUsCard = styled.div`
  position: relative;

  background-size: cover;
  height: 450px;

  margin-bottom: 24px;

  border-radius: 8px;

  z-index: 10;
  transition: 0.3s;

  :hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);
  }

  img {
    filter: blur(10px);
    border-radius: 8px;
  }

  > .opacity {
    border-radius: inherit;
    z-index: 50;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    > .content {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      z-index: 100;
      > h2 {
        color: white;
        font-size: 3rem;
        margin: 0 12px;

        text-align: center;
      }

      > .line {
        width: 30%;
        height: 1px;
        border: 1px solid #fff;

        border-radius: 8px;
      }
    }
  }
`;

export const OurHistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  height: 350px;

  transition: 0.3s;

  :hover {
    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);
    transform: scale(1.01);
  }

  > .history-content {
    width: 50%;
    height: 100%;
    /* margin: 0 24px; */
    padding: 18px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: ${theme.palette.primary.light};

    > .content-head {
      border-bottom: 1px solid ${theme.palette.secondary.dark};
      margin-bottom: 8px;
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${theme.palette.secondary.light};
        padding: 12px 0;
      }
    }

    > p {
      text-align: justify;
      font-size: 1rem;
      color: ${theme.palette.secondary.light};
      font-weight: 600;
    }
  }

  > .history-img {
    right: 0;

    width: 50%;
    height: 100%;
    background: url('/img/equipe.webp') center 80%;
    background-size: cover;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Cards = styled.div`
  margin-top: 24px;

  width: 100%;

  display: grid;
  align-items: center;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;

  > .generic {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    background-color: ${theme.palette.primary.light};

    transition: 0.3s;

    :hover {
      box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);
      transform: scale(1.01);
    }

    > .generic-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;

      > label {
        padding-bottom: 2px;
        color: ${theme.palette.secondary.light};
        font-weight: 700;
        width: 80%;
        font-size: 24px;
        border-bottom: 1px solid ${theme.palette.secondary.dark};
      }
    }

    > .generic-content {
      padding: 12px 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 70%;
      width: 100%;

      span {
        font-size: 1.1rem;
        font-weight: 600;
        color: ${theme.palette.secondary.light};
      }

      data {
        font-size: 0.8rem;
        font-weight: 700;
        color: #b1b1b1;
      }

      p {
        color: ${theme.palette.secondary.light};
        font-weight: 600;
      }

      h4 {
        color: ${theme.palette.primary.dark};
      }
    }

    > a {
      position: absolute;
      margin-right: 12px;
      margin-bottom: 12px;
      bottom: 0;
      right: 0;
      padding: 12px 24px;
      border: 1px solid ${theme.palette.primary.dark};
      border-radius: 8px;

      text-decoration: none;
      color: ${theme.palette.primary.dark};
      font-weight: 700;

      transition: 0.2s;

      :hover {
        background: ${theme.palette.primary.dark};
        color: ${theme.palette.secondary.light};
      }
    }
  }
`;
