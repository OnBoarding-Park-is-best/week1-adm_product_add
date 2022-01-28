import { ContentContainer, ContentItem } from '@components/base';
import { DateInput, RadioBox } from '@components/base';
import styled from 'styled-components';
import { useState } from 'react';

export const RadioList = () => {
  const [select, setSelect] = useState({
    list: ['제한없음', '미노출', '노출 기간 설정'],
    selected: '제한없음',
  });

  const handleChange = (e) => {
    setSelect({
      ...select,
      selected: e.target.value,
    });
  };

  return (
    <RadioContainer>
      {select.list &&
        select.list.map((value, i) => (
          <RadioBox
            key={i}
            id={i}
            value={value}
            checked={select.selected === value}
            onChange={handleChange}
          />
        ))}
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Period = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <ContentContainer title="노출 및 판매 기간 설정">
      <ContentItem title="상품 노출 기한">
        <StyledRadio>
          <RadioList />
          <DateContainer>
            <DateInput today withTime date={date} onChange={handleDateChange} />
            <span> ~ </span>
            <DateInput today withTime date={date} onChange={handleDateChange} />
          </DateContainer>
        </StyledRadio>
      </ContentItem>
      <ContentItem title="상품 판매 기한">
        <StyledRadio>
          <RadioList />
          <DateContainer>
            <DateInput today withTime date={date} onChange={handleDateChange} />
            <span> ~ </span>
            <DateInput today withTime date={date} onChange={handleDateChange} />
          </DateContainer>
        </StyledRadio>
      </ContentItem>
    </ContentContainer>
  );
};

const StyledRadio = styled.div`
  padding: 16px 20px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export default Period;
