import styled from 'styled-components';

const Container = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.colorYellowS};

  > .infos-title {
    display: flex;
    justify-content: center;
    align-items: center;

    > .infos-text {
      padding-left: 8px;
      width: 50%;
      height: 600px;

      text-align: center;
      padding: auto;

      display: flex;
      flex-direction: column;
      /*justify-content: space-around;*/
      align-items: center;

      .infos-text-content {
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
          color: ${(props) => props.theme.colors.colorYellowS};
          font-size: 2.5rem;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
        }

        > p {
          color: ${(props) => props.theme.colors.colorGreenS};
          font-size: 1.3rem;
          font-weight: 400;
          width: 60%;
          text-align: center;

          margin-bottom: 12px;
        }
      }
    }

    > .infos-img {
      background: url('/img/por_do_sol.webp') no-repeat;
      background-size: cover;
      width: 50%;
      height: 600px;
    }
  }

  > .infos-title-1 {
    margin: 0 0 25px 0;

    border-bottom: 2px solid ${(props) => props.theme.colors.colorYellowS};

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    > .infos-text {
      padding-left: 8px;

      width: 50%;
      height: 600px;

      display: flex;
      flex-direction: column;
      /*justify-content: space-around;*/
      align-items: center;

      .infos-text-content {
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
          color: ${(props) => props.theme.colors.colorYellowS};
          font-size: 2.5rem;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 8px;
        }

        > p {
          color: ${(props) => props.theme.colors.colorGreenS};
          font-size: 1.3rem;
          font-weight: 400;
          width: 60%;
          text-align: center;

          margin-bottom: 12px;
        }
      }
    }

    > .infos-img-1 {
      background: url('/img/crb-por-sol.webp') no-repeat;
      background-size: cover;
      width: 50%;
      height: 600px;
    }
  }
`;

export default Container;
