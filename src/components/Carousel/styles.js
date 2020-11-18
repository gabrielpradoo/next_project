import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.theme.colors.colorGrey};
  padding: 0 0 40px 0;

  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  border-bottom: 2px solid ${(props) => props.theme.colors.colorYellowS};
  border-top: 2px solid ${(props) => props.theme.colors.colorYellowS};

  .carrosel {
    /*     max-width: 1440px; */
    width: 100%;

    /*     max-height: 768px; */
    height: 100%;

    > div img {
      /*       max-width: 1440px; */
      width: 100%;

      max-height: 768px;
      height: 100%;
    }
  }
`;

export default Container;
