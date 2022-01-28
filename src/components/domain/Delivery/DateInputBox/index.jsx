import React, { Fragment } from 'react';
import { DateInput } from '@components/base';
import styled from 'styled-components';
import { useState } from 'react';

const DateInputBox = ({ date, onChange }) => {
  return (
    <Fragment>
      <Item>
        <SubClass>주문 시간</SubClass>
        <DateInput today withTime date={date} onChange={onChange} />
      </Item>
      <Item>
        <SubClass>새벽 배송</SubClass>
        <SubClass>일반 배송</SubClass>
      </Item>
    </Fragment>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SubClass = styled.h4`
  margin-right: 10px;
`;

export default DateInputBox;
