import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@utils/constants';
import buttonStyle from '@styles/buttonStyle';

const Button = ({ children, plusIcon, deleteIcon, ...props }) => {
  return (
    <CustomBtn {...props}>
      <ImagePlus>{`${plusIcon ? '+' : ''}`}</ImagePlus>
      <span>{children}</span>
      <CategoryDel>{`${deleteIcon ? 'X' : ''}`}</CategoryDel>
    </CustomBtn>
  );
};

const CustomBtn = styled.button`
  border: 1px solid ${COLORS.purple_90};
  border-radius: 5px;
  padding: 0.2rem 0.6rem;
  font-size: 1rem;
  background-color: #fff;
  ${buttonStyle}
`;

const ImagePlus = styled.span`
  padding-right: 3px;
`;

const CategoryDel = styled.span`
  padding-left: 8px;
  font-size: 0.5rem;
  font-weight: 600;
`;

export default Button;
