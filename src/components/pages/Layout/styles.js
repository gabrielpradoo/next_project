import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  background: ${theme.palette.primary.main};
  border-bottom: 1px solid ${theme.palette.secondary.main};

  #list {
  }
  > a {
    text-decoration: none;
    color: ${theme.palette.secondary.light};
  }
`;
