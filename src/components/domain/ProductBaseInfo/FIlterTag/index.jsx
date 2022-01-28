import React from 'react';
import styled from 'styled-components';
import Button from '@components/base/Button';

import { BORDER_STYLE } from '@utils/constants';

const FilterTags = ({ searchTag, tagList }) => {
  return (
    <Container>
      {tagList ? (
        <FilterTagWrap>
          {tagList.map((tag) => {
            return <Button filterCategory> {tag.title}</Button>;
          })}
        </FilterTagWrap>
      ) : (
        <div>필터 테그를 추가해주세요.</div>
      )}
    </Container>
  );
};

const Container = styled.article`
  overflow-y: scroll;
  margin: 1rem;
  padding: 1rem;
  height: 10rem;
  border: ${BORDER_STYLE};
`;

const FilterTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default FilterTags;
