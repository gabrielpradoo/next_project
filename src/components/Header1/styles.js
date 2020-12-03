import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.header`
  width: 100%;
  height: 95px;
  background: ${theme.palette.primary.main};

  font-family: Quicksand, sans-serif;

  border-bottom: 2px solid ${theme.palette.secondary.main};
  display: flex;

  > h1 {
    padding-left: 8px;
    padding-top: 8px;
    padding-bottom: 4px;
    > a {
      height: 100%;
      > img {
        max-height: 80px;
      }
    }
  }

  > ul {
    width: 70%;
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
        color: ${theme.palette.grey[100]};
        font-size: 1.5rem;

        font-weight: 600;

        transition: color 0.5s;

        transition: 0.3s;

        :hover {
          transform: scale(1.2);
          font-weight: 700;
        }

        :hover {
          color: ${theme.palette.secondary.main};
        }

        > img {
          width: inherit;
          height: 80px;
        }
      }
    }
  }

  .menu {
    position: fixed;
    height: 100%;
    width: 20%;
    height: 40%;
    margin: auto;
    z-index: 999;
    top: 0;
    right: 0;
    /* background-color: #111; */
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 45px;

    #myList > .loading {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
    }

    #myList > .nSigned,
    #myList > .signed {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      padding: 8px;

      > button {
        width: 50%;
      }

      > .log-in {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }

    .Show {
      border-radius: 8px;
      border: 1px solid ${theme.palette.secondary.main};
      width: 100%;
      height: 30%;
      z-index: 999;
      background-color: whitesmoke;
      transition: 0.5s;
    }

    #idClickIt {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 12px;

      > .icon {
        width: 40px;
        height: 40px;
        color: ${theme.palette.secondary.main};
        position: absolute;
        right: 0;
        padding-right: 20px;
        transition: 0.3s;

        :hover {
          transform: scale(1.5);
          font-weight: 700;
        }
      }
    }
    .Hide {
      display: none;
      transition: 0.5s;
      width: 0%;
    }
  }
`;

export default Container;
