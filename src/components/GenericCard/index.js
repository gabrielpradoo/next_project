import React, { ReactChildren } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Head, Icon, Main } from './styles';

interface GenericCardProps {
  title: string;
  icon: IconBaseProps;
  children: ReactChildren;
}

const GenericCard: React.FC<GenericCardProps> = ({ title, icon, children }) => {
  return (
    <Container>
      <Head>
        <h3>{title}</h3>
        <Icon>{icon}</Icon>
      </Head>

      <Main>{children}</Main>
    </Container>
  );
};

export default GenericCard;
