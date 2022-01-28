import React from 'react';
import styled from 'styled-components';
import Button from '@components/base/Button';
import { BORDER_STYLE } from '@utils/constants';

const FilterTags = ({ tagList, handleSelectedTags }) => {
  return (
    <Container>
      {tagList ? (
        <FilterTagWrap>
          {tagList.length === 0 ? (
            <Wrapper>검색 결과가 존재하지 않습니다.</Wrapper>
          ) : (
            tagList.map((tag, idx) => {
              return (
                <Button onClick={handleSelectedTags} key={idx} filterCategory>
                  {tag.title}
                </Button>
              );
            })
          )}
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
`;

export default FilterTags;
