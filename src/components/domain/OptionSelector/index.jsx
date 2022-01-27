import React, { useState } from 'react';
import styled from 'styled-components';
import { BORDER_STYLE, COLORS } from '@utils/constants';
import { Button } from '@components/base';
import { Option } from '@components/domain';

const OptionSelector = () => {
  const [optionSet, setOptionSet] = useState([]);
  return (
    <Container>
      <ContentTitle>
        <h2>상품 옵션 *</h2>
        <Button plusIcon>
          {/* onClick 추가 */}
          옵션 세트 추가
        </Button>
      </ContentTitle>
      <Content>
        {optionSet.length ? (
          <>
            {optionSet.map((one) => (
              <Option />
            ))}
          </>
        ) : (
          <Placeholder>옵션세트를 추가하여 옵션을 구성해 주세요.</Placeholder>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: ${COLORS.grey_30};
  border: ${BORDER_STYLE};
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0.75em;
  background-color: white;
  font-weight: bold;
  border-bottom: ${BORDER_STYLE};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  min-height: 50vh;
  max-height: 80vh;
  overflow-y: auto;
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  height: calc(50vh - 2em);
`;

export default OptionSelector;
