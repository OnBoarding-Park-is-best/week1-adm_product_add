import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Input } from '@components/base';

const AdditionalItem = ({ id, info, onAdditionalDelete }) => {
  const { name, normalPrice } = info;
  return (
    <Wrapper className="additionalOption" data-additional-option-id={id}>
      └
      <Input name="name" value={name} placeholder="추가 옵션명 (필수)" />
      <Input
        name="normalPrice"
        value={normalPrice}
        placeholder="추가 옵션 정상가 (필수)"
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
