import styled from 'styled-components';

export const CardContainer = styled.section`
  margin: 45px auto;

  max-width: 1440px;
  width: 100%;

  height: 650px;
  border: 4px solid #000;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
`;
export const CardContent = styled.aside`
  width: 100%;
  background: #e1e1e1;
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
