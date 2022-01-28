import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { Button, Icon } from '@components/base';
import { OptionItem } from '@components/domain';

const ProductItem = ({
  id,
  info,
  onProductDelete,
  onOptionAdd,
  onOptionDelete,
  onAdditionalAdd,
  onAdditionalDelete,
  onImageChange,
}) => {
  const { img, options } = info;

  const handleFileSelect = useCallback(
    (e) => {
      if (!e.target.files) return;
      const file = e.target.files[0];
      if (!file) {
        onImageChange(e, '');
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        if (event.target) onImageChange(e, String(event.target.result));
      };
      fileReader.readAsDataURL(file);
    },
    [onImageChange],
  );

  return (
    <Wrapper className="product" data-product-id={id}>
      <Button deleteRed onClick={onProductDelete}>
        삭제
      </Button>
      <Container>
        <ImageContainer img={img}>
          <ImageInput htmlFor={`image-upload${id}`}>
            <Icon name="ant-design:plus-outlined" height="0.8rem" />
            이미지 첨부
            <input
              id={`image-upload${id}`}
              accept="image/*"
              type="file"
              onChange={handleFileSelect}
              hidden
            />
          </ImageInput>
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
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  onProductDelete: PropTypes.func.isRequired,
  onOptionAdd: PropTypes.func.isRequired,
  onOptionDelete: PropTypes.func.isRequired,
  onAdditionalAdd: PropTypes.func.isRequired,
  onAdditionalDelete: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
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
    img ? `url("${img}") no-repeat center/110%` : COLORS.grey_60};
`;

const ImageInput = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.purple_90};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #fff;
`;

export default ProductItem;
