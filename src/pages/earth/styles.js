import styled from 'styled-components';

export default Container = styled.div`
  width: 100%;
`;

export default HeaderImg = styled.div`
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

export default Main = styled.main`
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
