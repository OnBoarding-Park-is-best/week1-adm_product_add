import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '@assets/logo.png';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { NavBar } from '@components/domain';

const Layout = ({ onSave, children }) => {
  return (
    <Grid>
      <header style={{ ...borderRight, ...borderBottom }}>
        <ImageContainer href="/">
          <img src={logo} alt="로고" width="60%" />
        </ImageContainer>
      </header>
      <div style={{ ...borderBottom }}></div>
      <div style={{ ...borderRight, ...borderBottom }}>기본설정</div>
      <div style={{ ...borderBottom }}>저장하기</div>
      <nav style={{ ...borderRight }}>
        <NavBar />
      </nav>
      <MainContainer>{children}</MainContainer>
    </Grid>
  );
};

Layout.propTypes = {
  navigation: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 3em 2em 1fr;
  height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 3em;
  padding: 2em 1em;
  overflow-y: auto;
`;

const ImageContainer = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 1em;
  filter: opacity(0.7) drop-shadow(0 0 0 ${COLORS.purple_90});
`;

const borderBottom = { borderBottom: BORDER_STYLE };

const borderRight = { borderRight: BORDER_STYLE };

export default Layout;
