import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;

  padding: 12px 32px;

  background: ${theme.palette.primary.main};

  > .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > .find-us,
    .social,
    .contact-us {
      height: 100%;
      width: 25%;

      display: flex;
      flex-direction: column;

      > h3 {
        color: ${theme.palette.secondary.main};
        font-size: 18px;
        margin-bottom: 18px;
      }
    }

    > .find-us {
      align-items: flex-start;

      > .find-us-content {
        height: 50%;
        display: flex;
        flex-direction: column;

        > p {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
          color: white;
        }

        > .on-map {
          margin-top: 8px;

          text-decoration: none;
          color: ${theme.palette.secondary.light};
          font-size: 16px;

          transition: 0.5s;

          :hover {
            font-weight: 600;
            color: ${theme.palette.secondary.main};
          }
        }
      }
    }

    .social {
      display: flex;
      flex-direction: column;

      > .social-content {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          font-size: 16px;
          color: ${theme.palette.secondary.light};
          transition: 0.5s;

          :hover {
            font-weight: 600;
            color: ${theme.palette.secondary.main};
          }
        }
      }
    }

    > .contact-us {
      > .contact-content {
        height: 50%;
        display: flex;
        flex-direction: column;

        > p {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
          color: ${theme.palette.grey[100]};
        }

        > .email-contact {
          margin-top: 8px;

          text-decoration: none;
          font-size: 16px;
          color: ${theme.palette.secondary.light};
          transition: 0.5s;

          :hover {
            font-weight: 600;
            color: ${theme.palette.secondary.main};
          }
        }
      }
    }
  }

  > .dev-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 0;

    background: ${theme.palette.secondary.main};

    display: flex;
    justify-content: space-around;

    > p,
    a {
      font-weight: 600;
      color: ${theme.palette.primary.dark};
    }
  }
`;
