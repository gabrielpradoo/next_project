import styled from 'styled-components';

export const Container = styled.div`
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
      color: ${(props) => props.theme.colors.colorYellowS};
    }

    > p {
      font-size: 1.2rem;

      > a {
        font-weight: 700;
        color: ${(props) => props.theme.colors.colorBlack};
        text-decoration: none;
        transition: color 0.4s;

        :hover {
          color: ${(props) => props.theme.colors.colorYellowS};
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

        > span {
          font-size: 1.7rem;
          font-weight: 700;
          color: ${(props) => props.theme.colors.colorWhite};
          margin-bottom: 8px;
        }

        .btn {
          text-decoration: none;
          background: ${(props) => props.theme.colors.colorGreenS};
          padding: 14px 32px;

          border-radius: 3px;

          color: ${(props) => props.theme.colors.colorWhite};
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
      background-position: center;
      background-size: cover;
    }

    .itinerary-earth {
      border-radius: 5px;

      background: url('/img/jacare.webp') no-repeat;
      background-position: 35% 70%;
      background-size: cover;
    }
  }
`;
