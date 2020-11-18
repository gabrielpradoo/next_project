import styled from 'styled-components';

export default Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.colorWhite};
`;

export default Main = styled.main`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 20px auto;

  @media (max-width: 1440px) {
    padding: 24px;
  }
`;

export default AboutUsCard = styled.div`
  position: relative;
  background: url('/img/kayama.webp') center 30%;
  background-size: cover;
  height: 450px;

  margin-bottom: 24px;

  border-radius: 8px;

  box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);

  transition: 0.3s;

  :hover {
    transform: scale(1.01);
  }

  > .opacity {
    border-radius: inherit;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    > h2 {
      color: ${(props) => props.theme.colors.colorWhite};
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

    > .social {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      margin: 30px 50px;

      > h3 {
        color: #fff;
      }

      > span {
        color: #0060df;
        font-weight: 700;
      }

      > .social-btns {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 5px;
      }
    }
  }
`;

export default OurHistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  height: 350px;

  box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);

  transition: 0.3s;

  :hover {
    transform: scale(1.01);
  }

  > .history-content {
    width: 50%;
    height: 100%;
    margin: 0 24px;
    padding: 12px 0;

    > .content-head {
      border-bottom: 1px solid ${(props) => props.theme.colors.colorYellow};
      margin-bottom: 8px;
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.colorYellow};
        padding: 12px 0;
      }
    }

    > p {
      text-align: justify;
      font-size: 1rem;
    }
  }

  > .history-img {
    right: 0;

    width: 52%;
    height: 100%;
    background: url('/img/equipe.webp') center 80%;
    background-size: cover;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: 1300px) {
    > .history-img {
      width: 40%;
    }
  }
`;

export default Cards = styled.div`
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
    background-color: #fff;

    box-shadow: 2px 2px 15px rgba(100, 100, 100, 0.4);

    transition: 0.3s;

    :hover {
      transform: scale(1.01);
    }

    > .generic-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;

      > label {
        padding-bottom: 2px;
        color: ${(props) => props.theme.colors.colorYellow};
        font-weight: 700;
        width: 80%;
        font-size: 1.7rem;
        border-bottom: 1px solid ${(props) => props.theme.colors.colorYellow};
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
        font-weight: 500;
      }

      data {
        font-size: 0.8rem;
        font-weight: 700;
        color: #b1b1b1;
      }
    }

    > a {
      position: absolute;
      margin-right: 12px;
      margin-bottom: 12px;
      bottom: 0;
      right: 0;
      padding: 12px 24px;
      border: 1px solid #0060df;
      border-radius: 8px;

      text-decoration: none;
      color: #0060df;
      font-weight: 700;

      transition: 0.2s;

      :hover {
        background: #0060df;
        color: #fff;
      }
    }
  }
`;
