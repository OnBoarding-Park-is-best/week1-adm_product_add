import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Input } from '@components/base';

const AdditionalItem = ({ id, info, onAdditionalDelete, onInputChange }) => {
  const { name, normalPrice } = info;
  return (
    <Wrapper className="additionalOption" data-additional-option-id={id}>
      └
      <Input
        name="name"
        value={name}
        onChange={onInputChange}
        placeholder="추가 옵션명 (필수)"
        required
      />
      <Input
        name="normalPrice"
        value={normalPrice}
        onChange={onInputChange}
        placeholder="추가 옵션 정상가 (필수)"
        required
      />
      원
      <ButtonWrapper>
        <Button deleteRed onClick={onAdditionalDelete}>
          삭제
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

AdditionalItem.propTypes = {
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  onAdditionalDelete: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 13em;
`;

export default AdditionalItem;
