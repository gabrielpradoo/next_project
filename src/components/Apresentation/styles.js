import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  max-height: 900px;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  background: ${theme.palette.primary.light};

  > div {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    > h2 {
      color: ${theme.palette.secondary.light};
      font-size: 2rem;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 8px;
    }

    > p {
      color: ${theme.palette.primary.dark};
      font-size: 1.5rem;
      font-weight: 400;
      width: 60%;
      text-align: center;

      margin-bottom: 12px;
    }
  }

  > iframe {
    display: inline-block;

    /*     max-width: 1440px; */
    width: 50%;
    height: 700px;
  }
`;
