import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-height: 900px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.colorGreen};

  > iframe {
    display: inline-block;

    max-width: 1440px;
    width: 100%;
    height: 700px;
  }
`;

export default Container;
