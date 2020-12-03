import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
