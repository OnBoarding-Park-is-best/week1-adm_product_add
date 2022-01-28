import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS, TAX_OPTIONS } from '@utils/constants';
import { Button, Input, Icon } from '@components/base';
import AdditionalItem from '../AdditionalItem';
import { calcDiscount } from '@utils/price';

const OptionItem = ({
  id,
  info,
  onOptionDelete,
  onAdditionalAdd,
  onAdditionalDelete,
  onInputChange,
}) => {
  const { name, normalPrice, sellPrice, stock, tax, additionalOptions } = info;

  return (
    <Container className="option" data-option-id={id}>
      <ButtonWrapper>
        <Button deleteRed onClick={onOptionDelete}>
          삭제
        </Button>
      </ButtonWrapper>
      <Input
        name="name"
        placeholder="옵션명을 입력해 주세요. (필수)"
        value={name}
        onChange={onInputChange}
        required
      />
      <Wrapper>
        <Input
          name="normalPrice"
          placeholder="상품 정상가 (필수)"
          value={normalPrice}
          onChange={onInputChange}
          required
        />
        <Unit>원</Unit>
        <Unit>{calcDiscount(normalPrice, sellPrice)}</Unit>
        <Input
          name="sellPrice"
          placeholder="상품 판매가 (필수)"
          value={sellPrice}
          onChange={onInputChange}
          required
        />
        <Unit>원</Unit>
        <Input
          name="stock"
          placeholder="재고 (필수)"
          value={stock}
          onChange={onInputChange}
          required
        />
        <Unit>개</Unit>
        <SelectBox value={tax} name="tax" onChange={onInputChange}>
          {TAX_OPTIONS.map((one, idx) => (
            <option key={idx} value={one}>
              {one}
            </option>
          ))}
        </SelectBox>
      </Wrapper>
      {additionalOptions.map((option, idx) => (
        <AdditionalItem
          id={idx}
          key={idx}
          info={option}
          onAdditionalDelete={onAdditionalDelete}
          onInputChange={onInputChange}
        />
      ))}
      <ButtonWrapper align="flex-start">
        <AddButton id="addOption" onClick={onAdditionalAdd}>
          <Icon name="ant-design:plus-outlined" height="24px" />
        </AddButton>
        <label htmlFor="addOption">추가 옵션 상품 추가</label>
      </ButtonWrapper>
    </Container>
  );
};

OptionItem.propTypes = {
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  onOptionDelete: PropTypes.func.isRequired,
  onAdditionalAdd: PropTypes.func.isRequired,
  onAdditionalDelete: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
`;

const Unit = styled.span`
  padding-left: 0.5em;
  padding-right: 1em;
  word-break: keep-all;
`;

const SelectBox = styled.select`
  padding: 8px 5px;
  width: 60%;
  border: 1px solid ${COLORS.grey_60};
  background-color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${({ align }) => align || 'flex-end'};
  align-items: center;
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
