import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { Button } from '@components/base';
import { OptionItem } from '@components/domain';

const ProductItem = ({
  id,
  info,
  onProductDelete,
  onOptionAdd,
  onOptionDelete,
  onAdditionalAdd,
  onAdditionalDelete,
}) => {
  const { img, options } = info;

  return (
    <Wrapper className="product" data-product-id={id}>
      <Button deleteRed onClick={onProductDelete}>
        삭제
      </Button>
      <Container>
        <ImageContainer img={img}>
          <Button plusIcon>이미지 첨부</Button>
        </ImageContainer>
        {options.map((option, idx) => (
          <OptionItem
            id={idx}
            key={idx}
            info={option}
            onOptionDelete={onOptionDelete}
            onAdditionalAdd={onAdditionalAdd}
            onAdditionalDelete={onAdditionalDelete}
          />
        ))}
        <Button plusIcon width="100%" onClick={onOptionAdd}>
          옵션 추가
        </Button>
      </Container>
    </Wrapper>
  );
};

ProductItem.propTypes = {
  info: PropTypes.object.isRequired,
  onProductDelete: PropTypes.func.isRequired,
  onOptionAdd: PropTypes.func.isRequired,
  onOptionDelete: PropTypes.func.isRequired,
  onAdditionalAdd: PropTypes.func.isRequired,
  onAdditionalDelete: PropTypes.func.isRequired,
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12em;
  border: ${BORDER_STYLE};
  background: ${({ img }) =>
    `url("${img}") no-repeat center/110%` || COLORS.grey_60};
`;

export default ProductItem;
