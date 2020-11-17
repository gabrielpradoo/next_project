import styled from 'styled-components';

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
  background: url('/img/terra/comodoro.webp') no-repeat center 70%;
  background-size: cover;
  transition: 0.5s;

  :hover {
    transform: scale(1.03);
  }

  > .opacity {
    border-radius: inherit;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    > h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 3.7rem;
      color: ${(props) => props.theme.colors.colorYellowS};
    }
  }
`;

export const Main = styled.main`
  margin-top: 22px;

  display: flex;
  flex-direction: column;

  align-items: center;

  > h3 {
    text-align: center;
    font-size: 1.7rem;
  }

  > p {
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  position: relative;

  margin: 0 auto;

  max-width: 1440px;
  width: 100%;

  padding: 32px;

  > .day {
    position: relative;
    width: 100%;
    height: 750px;
    margin: 18px 0;

    border: 1px solid #80808067;

    border-radius: 8px;

    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);

    transition: 0.3s;

    :hover {
      transform: scale(1.01);
    }

    > .day-block {
      width: 100%;
      height: 60px;
      background: #999999;

      display: flex;

      border-top-left-radius: 7px;
      border-top-right-radius: 7px;

      margin-bottom: 32px;

      > p {
        width: 100px;
        height: 70px;
        background: ${(props) => props.theme.colors.colorYellow};

        color: ${(props) => props.theme.colors.colorWhite};
        font-size: 1.7rem;
        text-align: center;
        font-weight: 600;

        padding: 3% 0;

        margin: 0 18px;
      }

      > .day-block-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > div {
          display: flex;
          align-items: center;

          > span {
            margin-left: 5px;
          }
        }
      }
    }

    > .day-content {
      position: relative;
      padding: 24px;
      text-align: justify;
    }
    > .day-img {
      position: absolute;

      height: 60%;

      bottom: 0;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
