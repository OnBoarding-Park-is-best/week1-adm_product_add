import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS, TAX_OPTIONS } from '@utils/constants';
import { Button, Input, Icon } from '@components/base';
import { Option } from '../class';

const OptionItem = ({ info }) => {
  const {
    name,
    normalPrice,
    sellPrice,
    discountPercent,
    stock,
    tax,
    additionalOptions,
  } = info;
  return (
    <Container>
      <ButtonWrapper>
        <Button deleteRed>삭제</Button>
      </ButtonWrapper>
      <Input
        name="name"
        placeholder="옵션명을 입력해 주세요. (필수)"
        value={name}
      />
      <Wrapper>
        <Input
          name="normalPrice"
          placeholder="상품 정상가 (필수)"
          value={normalPrice}
        />
        <Unit>원</Unit>
        <Unit>
          {normalPrice !== sellPrice ? `${discountPercent}%` : '할인율 없음'}
        </Unit>
        <Input
          name="sellPrice"
          placeholder="상품 판매가 (필수)"
          value={sellPrice}
        />
        <Unit>원</Unit>
        <Input name="stock" placeholder="재고 (필수)" value={stock} />
        <Unit>개</Unit>
        <select value={tax}>
          {TAX_OPTIONS.map((one, idx) => (
            <option key={idx} value={one}>
              {one}
            </option>
          ))}
        </select>
      </Wrapper>
      {additionalOptions.map((option) => (
        <div key={option.name}>{JSON.stringify(option)}</div>
      ))}
      <ButtonWrapper align="flex-start">
        <AddButton id="addOption">
          <Icon name="ant-design:plus-outlined" height="24px" />
        </AddButton>
        <label htmlFor="addOption">추가 옵션 상품 추가</label>
      </ButtonWrapper>
    </Container>
  );
};

OptionItem.propTypes = {
  info: PropTypes.instanceOf(Option).isRequired,
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: #fff;
  width: 100%;
  border: ${BORDER_STYLE};
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Unit = styled.span`
  padding-left: 0.5em;
  padding-right: 1em;
  word-break: keep-all;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${({ align }) => align || 'flex-end'};
  align-items: center;
  width: 100%;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
  width: 30px;
  height: 30px;
  border: 1px solid ${COLORS.grey_60};
  border-radius: 3px;
`;

export default OptionItem;
