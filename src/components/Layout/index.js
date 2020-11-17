import Header1 from '../Header1';
import Sidebar from '../Sidebar';

import { Container, ContentContainer, SidebarContainer } from './styles';

function Layout({ children }) {
  return (
    <>
      <Header1></Header1>
      <Container>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layout;
