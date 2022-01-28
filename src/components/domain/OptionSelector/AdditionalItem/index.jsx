import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '@components/base';

const AdditionalItem = ({ info }) => {
  const { name, normalPrice } = info;
  return (
    <Wrapper>
      └
      <Input name="name" value={name} placeholder="추가 옵션명 (필수)" />
      <Input
        name="normalPrice"
        value={normalPrice}
        placeholder="추가 옵션 정상가 (필수)"
      />
      원
      <ButtonWrapper>
        <Button deleteRed>삭제</Button>
      </ButtonWrapper>
    </Wrapper>
  );
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
