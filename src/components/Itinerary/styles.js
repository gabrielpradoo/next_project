import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  > .itinerary-text {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-bottom: 20px;

    > h2 {
      font-size: 2rem;
      font-weight: 500;
      color: ${theme.palette.secondary.main};
    }

    > p {
      font-size: 1.2rem;

      > a {
        font-weight: 700;
        color: black;
        text-decoration: none;
        transition: color 0.4s;

        :hover {
          color: ${theme.palette.secondary.dark};
        }
      }
    }
  }

  .itineraries {
    max-width: 1440px;
    width: 100%;

    display: flex;
    justify-content: space-around;

    > .itinerary-earth,
    .itinerary-water {
      position: relative;
      width: 35%;
      height: 70vh;

      > .content {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-bottom: 18px;

        .btn {
          text-decoration: none;
          background: ${theme.palette.primary.main};
          padding: 4% 6%;

          border-radius: 3px;

          color: ${theme.palette.secondary.light};
          font-size: 1.1rem;
          font-weight: 700;

          transition: 0.4s;

          :hover {
            transform: scale(1.1);
          }
        }
      }
    }

    .itinerary-water {
      border-radius: 5px;

      background: url('/img/tucano.webp') no-repeat;
      background-position: 30% center;
      background-size: cover;

      transition: background 0.7s;

      :hover {
        background: url('img/passeio-moinho.webp') no-repeat;
        background-position: 30% center;
        background-size: cover;
      }
    }

    .itinerary-earth {
      border-radius: 5px;

      background: url('/img/jacare.webp') no-repeat;
      background-position: 35% 70%;
      background-size: cover;

      transition: background 0.7s;

      :hover {
        background: url('img/terra/third/1.webp') no-repeat;
        background-position: 35% 70%;
        background-size: cover;
      }
    }
  }
`;

export default Container;
