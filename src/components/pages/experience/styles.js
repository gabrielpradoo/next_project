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

export const Cards = styled.section`
  width: 100%;

  display: grid;
  grid-gap: 12px;
  grid-template-areas:
    'xp xp eco ecoimg ecoimg'
    'xp xp pe pescaimg pescaimg'
    'xp xp gas gastimg gastimg'
    'res res se safariimg safariimg';

  > .reserve {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    grid-area: res;

    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/img/agua/all/2.webp') 40% 100%;

    > a {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 2rem;
      text-decoration: none;
      color: white;
      transition: 0.3s;
      box-shadow: 2px 15px 15px rgba(100, 100, 100, 0.4);
      :hover {
        font-size: 2.2.rem;
        font-weight: 700;
      }
    }
  }

  > .ecoturismo {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    grid-area: eco;

    > header {
      background: ${theme.palette.primary.main};
    }
  }

  > .gastronomia {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    grid-area: gas;

    > header {
      background: ${theme.palette.primary.light};
    }
  }

  > .xp-pantaneira {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    grid-area: xp;

    border-radius: 8px;
    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);
    transition: 0.3s;

    :hover {
      transform: scale(1.01);
    }

    > header {
      width: 100%;
      height: 54px;
      background: grey;
      padding: auto 0;
      display: flex;
      justify-content: center;
      align-items: center;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      > strong {
        font-size: 1.5rem;
        color: white;
      }
    }

    > p {
      height: 90%;
      font-size: 1.3rem;
      padding: 12px;

      background-color: white;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  > .pesca-esportiva {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    grid-area: pe;
    margin-bottom: 8px;

    > header {
      background: ${theme.palette.secondary.main};
    }
  }

  > .safari-ecologico {
    width: 100%;
    height: 100%;

    grid-area: se;

    > header {
      background: ${theme.palette.secondary.light};
    }
  }

  > .ecoturismo-img {
    width: 100%;
    height: 100%;
    grid-area: ecoimg;
  }

  > .pesca-img {
    width: 100%;
    height: 100%;
    grid-area: pescaimg;
  }

  > .gastronomia-img {
    width: 100%;
    height: 100%;
    grid-area: gastimg;
  }

  > .safari-img {
    width: 100%;
    height: 100%;
    grid-area: safariimg;
  }

  > .ecoturismo-img,
  .pesca-img,
  .gastronomia-img,
  .safari-img {
    border-radius: 8px;
    transition: 0.3s;
    box-shadow: 2px 15px 15px rgba(100, 100, 100, 0.4);

    :hover {
      transform: scale(1.01);
    }
    > img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }
  }

  > .ecoturismo,
  > .reserve,
  > .gastronomia,
  > .pesca-esportiva,
  > .safari-ecologico {
    border-radius: 8px;
    box-shadow: 2px 15px 15px rgba(100, 100, 100, 0.4);
    transition: 0.3s;

    :hover {
      transform: scale(1.01);
    }

    > header {
      width: 100%;
      height: 54px;

      padding: auto 0;
      display: flex;
      justify-content: center;
      align-items: center;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      > strong {
        font-size: 1.5rem;
        color: white;
      }
    }

    > p {
      height: 70%;
      font-size: 1rem;
      padding: 12px;

      background-color: white;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;
