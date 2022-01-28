import React, { Fragment } from 'react';
import { DateInput } from '@components/base';
import styled from 'styled-components';

const DateInputContainer = ({ date, onChange }) => {
  return (
    <Fragment>
      <Item>
        <SubClass>주문 시간</SubClass>
        <DateInput today withTime date={date} onChange={onChange} />
        <span> ~ </span>
        <DateInput today withTime date={date} onChange={onChange} />
      </Item>
      <Item>
        <SubClass>새벽 배송</SubClass>
        <DateInputBox>
          <DateInput today date={date} onChange={onChange} />
        </DateInputBox>
        <SubClass>일반 배송</SubClass>
        <DateInputBox>
          <DateInput today date={date} onChange={onChange} />
        </DateInputBox>
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

const DateInputBox = styled.div`
  width: 150px;
  margin-right: 15px;
`;

export default DateInputContainer;
