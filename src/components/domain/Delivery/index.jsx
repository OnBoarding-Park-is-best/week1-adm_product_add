import React from 'react';
import { DELIVERY_DATA } from '@utils/constants';
import { ContentContainer, ContentItem, Toggle } from '@components/base';
import DateInputBox from './DateInputBox';
import styled from 'styled-components';
import { useState } from 'react';

const initialState = {
  departure: false,
  receipt: false,
  reservation: false,
};

const Delivery = () => {
  const [date, setDate] = useState(null);
  const [checkedToggles, setCheckedToggles] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const checkHandler = (e) => {
    const isChecked = e.target.checked;
    const name = e.target.name;

    if (name === DELIVERY_DATA[2].id && isChecked) {
      setCheckedToggles({ ...initialState, [name]: true });
      return;
    }
    if (isChecked) {
      setCheckedToggles((prev) => ({
        ...prev,
        [DELIVERY_DATA[2].id]: false,
        [name]: true,
      }));
      return;
    }
    setCheckedToggles((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <ContentContainer title="상품 배송 설정">
      {DELIVERY_DATA.map((item) => {
        return (
          <ContentItem key={item.id} title={item.title}>
            <ToggleBox>
              <Toggle
                name={item.id}
                checked={checkedToggles[item.id]}
                onChange={checkHandler}
                props={checkedToggles}
              />
              {item.dateRequire && (
                <DateInputBox date={date} onChange={handleDateChange} />
              )}
            </ToggleBox>
          </ContentItem>
        );
      })}
    </ContentContainer>
  );
};

const ToggleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 30px;
`;

export default Delivery;
