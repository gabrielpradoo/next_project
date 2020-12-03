import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderImg = styled.div`
  position: relative;

  max-width: 1440px;
  width: 95%;
  height: 60vh;

  margin: 24px auto;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

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

export const Main = styled.main`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 20px auto;

  @media (max-width: 1440px) {
    padding: 24px;
  }

  margin-top: 22px;

  display: flex;
  flex-direction: column;

  align-items: center;

  > h3 {
    text-align: center;
    font-size: 1.7rem;
    color: ${theme.palette.primary.dark};
  }

  > p {
    text-align: center;
    font-size: 1.3rem;
    color: ${theme.palette.primary.dark};
  }
`;

export const Description = styled.div`
  max-width: 1440px;
  width: 100%;

  margin: 0 auto 20px;

  border-radius: 8px;

  display: grid;
  grid-template-areas:
    'script description'
    'script what_is_included'
    'script what_is_not_included'
    'what_to_bring what_to_bring';

  grid-gap: 12px;

  > .description {
    grid-area: description;
  }
  > .script {
    grid-area: script;
  }
  > .what_is_included {
    grid-area: what_is_included;
  }
  > .what_is_not_included {
    grid-area: what_is_not_included;
  }
  > .what_to_bring {
    grid-area: what_to_bring;
  }

  > .description,
  .script,
  .what_is_included,
  .what_is_not_included,
  .what_to_bring {
    border-radius: 8px;
    background: ${theme.palette.primary.light};
    padding: 20px;

    > h3 {
      padding-bottom: 2px;
      color: ${theme.palette.secondary.light};
      font-weight: 700;
      width: 100%;
      font-size: 1.7rem;
      border-bottom: 1px solid ${theme.palette.secondary.dark};
      margin-bottom: 23px;
    }

    p {
      font-size: 1rem;
      text-align: justify;

      color: ${theme.palette.secondary.light};
      font-weight: 600;

      > strong {
        font-size: 1.3rem;
        color: ${theme.palette.primary.dark};
      }
    }
  }
`;
