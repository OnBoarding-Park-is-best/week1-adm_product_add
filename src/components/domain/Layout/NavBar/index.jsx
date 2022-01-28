import React from 'react';
import styled from 'styled-components';
import { NAV_BAR_CONTENT } from '@utils/constants';
import NavButton from './../NavButton';

const NavBar = () => {
  return (
    <Container>
      {NAV_BAR_CONTENT.map(({ title, href, current }) => (
        <NavButton key={title} href={href} current={current}>
          {title}
        </NavButton>
      ))}
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default NavBar;
