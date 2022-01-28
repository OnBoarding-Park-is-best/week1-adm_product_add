import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon } from '@components/base';
import { BORDER_STYLE, COLORS } from '@utils/constants';

const NavButton = ({ href, current, border, children }) => {
  if (href)
    return (
      <Anchor href={href} current={current} border={border}>
        {children}
      </Anchor>
    );
  return (
    <Button border={border}>
      {children}
      <Icon name="dashicons:arrow-down-alt2" height="1em" inline />
    </Button>
  );
};

NavButton.propTypes = {
  href: PropTypes.string,
  current: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

NavButton.defaultProps = {
  current: false,
  border: true,
};

const commonStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-bottom: ${({ border }) => (border ? BORDER_STYLE : '')};
  width: 100%;
  height: 3em;
`;

const Button = styled.button`
  ${commonStyle}
`;

const Anchor = styled.a`
  ${commonStyle}
  background-color: ${({ current }) =>
    current ? COLORS.purple_30 : COLORS.grey_60};
  color: ${({ current }) => (current ? COLORS.purple_90 : 'black')};
`;

export default NavButton;
