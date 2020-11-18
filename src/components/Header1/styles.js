import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 95px;
  background: ${(props) => props.theme.colors.colorGreenS};

  font-family: Quicksand, sans-serif;

  border-bottom: 2px solid ${(props) => props.theme.colors.colorYellowS};

  > ul {
    width: 100%;
    height: inherit;

    display: flex;
    justify-content: space-around;
    align-items: center;

    > li {
      width: 25%;
      height: inherit;
      list-style: none;

      display: flex;
      justify-content: center;
      align-items: center;

      > a {
        position: relative;

        text-decoration: none;
        color: ${(props) => props.theme.colors.colorWhite};
        font-size: 20px;

        font-weight: 600;

        transition: color 0.5s;

        transition: 0.3s;

        :hover {
          transform: scale(1.1);
        }

        :hover {
          color: ${(props) => props.theme.colors.colorYellowS};
        }

        > img {
          width: inherit;
          height: 80px;
        }
      }
    }
  }
`;

export default Container;
