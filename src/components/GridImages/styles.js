import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  box-sizing: border-box;
  z-index: 5;
  padding: 32px;
  margin: auto;
  max-width: 1440px;

  width: 100%;
  height: 100%;

  column-count: 4;
  column-gap: 10px;

  > figure {
    margin: 0;
    display: flex;
    margin-bottom: 10px;
    break-inside: avoid;

    cursor: pointer;
    transition: 0.3s;

    z-index: 10;

    :hover {
      transform: scale(1.5);
    }

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;
