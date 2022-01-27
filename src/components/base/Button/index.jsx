import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '@utils/constants';
import buttonStyle from '@styles/buttonStyle';
import { Icon } from '@components/base';

const Button = ({ children, plusIcon, deleteIcon, width, ...props }) => {
  return (
    <CustomBtn width={width} {...props}>
      {plusIcon && <Icon name="ant-design:plus-outlined" height="0.8rem" />}
      {children}
      {deleteIcon && <Icon name="bi:x" height="1rem" />}
    </CustomBtn>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  plusIcon: PropTypes.bool,
  deleteIcon: PropTypes.bool,
  width: PropTypes.string,
};

Button.defaultProps = {
  plusIcon: false,
  deleteIcon: false,
};

const CustomBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.purple_90};
  border-radius: 5px;
  width: ${({ width }) => width || ''};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #fff;
  ${buttonStyle}
`;

export default Button;
