import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: space-between;

  padding: 32px;

  background: ${(props) => props.theme.colors.colorGreen};

  > .find-us,
  .contact-us {
    height: 100%;
    width: 45%;

    display: flex;
    flex-direction: column;

    > h3 {
      color: ${(props) => props.theme.colors.colorYellowS};
      font-size: 1.7rem;
      margin-bottom: 18px;
    }
  }

  > .find-us {
    align-items: flex-start;

    > .find-us-content {
      height: 23%;
      display: flex;
      flex-direction: column;

      > p {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 4px;
        color: ${(props) => props.theme.colors.colorWhite};
      }
    }

    > .on-map {
      margin-top: 16px;

      text-decoration: none;
      color: ${(props) => props.theme.colors.colorYellow};
      font-size: 1.3rem;
      font-weight: 600;
      transition: color 0.5s;

      :hover {
        color: ${(props) => props.theme.colors.colorYellow};
      }
    }
  }

  > .contact-us {
    align-items: flex-end;

    > .contact-content {
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > p {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 4px;
        color: ${(props) => props.theme.colors.colorWhite};
      }

      > .email-contact {
        margin-top: 8px;

        text-decoration: none;
        color: ${(props) => props.theme.colors.colorYellow};
        font-size: 1.3rem;
        font-weight: 600;
        transition: color 0.5s;

        :hover {
          color: ${(props) => props.theme.colors.colorYellowS};
        }
      }
    }

    .social {
      margin-top: 16px;

      display: flex;
      flex-direction: column;

      > span {
        color: ${(props) => props.theme.colors.colorYellowS};
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 8px;
      }

      > .social-content {
        display: flex;
        justify-content: space-around;
      }
    }
  }

  > .dev-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 0;

    background: ${(props) => props.theme.colors.colorGreenS};

    display: flex;
    justify-content: space-around;

    > p,
    a {
      color: ${(props) => props.theme.colors.colorWhite};
    }
  }
`;

export default Container;
