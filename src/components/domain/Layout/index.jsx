import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '@assets/logo.png';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { Button } from '@components/base';
import scrollStyle from '@styles/scrollStyle';
import NavBar from './NavBar';
import NavButton from './NavButton';

const Layout = ({ children }) => {
  return (
    <Grid>
      <header style={{ ...borderRight, ...borderBottom }}>
        <ImageContainer href="/">
          <img src={logo} alt="로고" width="90" />
        </ImageContainer>
      </header>
      <div style={{ ...borderBottom }}></div>
      <div style={{ ...borderRight, ...borderBottom }}>
        <NavButton border={false}>기본 설정</NavButton>
      </div>
      <SaveContainer style={{ ...borderBottom }}>
        <Title>상품 등록</Title>
        <Button type="submit" confirm form="register">
          저장하기
        </Button>
      </SaveContainer>
      <div style={{ ...borderRight }}>
        <NavBar />
      </div>
      <MainContainer>{children}</MainContainer>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 15em 1fr;
  grid-template-rows: 4em 3em 1fr;
  height: 100vh;
`;

const SaveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const ImageContainer = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 1em;
  filter: opacity(0.7) drop-shadow(0 0 0 ${COLORS.purple_90});
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 3em;
  padding: 2em 1em;
  overflow-y: auto;
  ${scrollStyle}
`;

const borderBottom = { borderBottom: BORDER_STYLE };

const borderRight = { borderRight: BORDER_STYLE };

export default Layout;
