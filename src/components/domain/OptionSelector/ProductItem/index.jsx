import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { Button } from '@components/base';
import { OptionItem } from '@components/domain';
import { Product } from '../class';

const ProductItem = ({ info }) => {
  const { img, options } = info;
  return (
    <Wrapper>
      <Button deleteRed>삭제</Button>
      <Container>
        <ImageContainer img={img}>
          {!img && <Button plusIcon>이미지 첨부</Button>}
        </ImageContainer>
        {options.map((option, idx) => (
          <OptionItem key={idx} info={option} />
        ))}
        <Button plusIcon width="100%">
          옵션 추가
        </Button>
      </Container>
    </Wrapper>
  );
};

ProductItem.propTypes = {
  info: PropTypes.instanceOf(Product).isRequired,
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5em;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: #fff;
  width: 100%;
  border: ${BORDER_STYLE};
`;

const ImageContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15em;
  border: ${BORDER_STYLE};
  background: ${({ img }) =>
    `url("${img}") no-repeat center/110%` || COLORS.grey_60};
`;

export default ProductItem;
