import React from 'react';
import styled from 'styled-components';
import Button from '@components/base/Button';

const SelectedTags = ({ selectedTags, removeSelectedTag }) => {
  return (
    <Container>
      <h4>지정된 필터 태그</h4>
      <SelectedList>
        {selectedTags.map((tag, idx) => {
          return (
            <Button
              onClick={removeSelectedTag}
              key={idx}
              filterCategory
              deleteIcon
            >
              {tag}
            </Button>
          );
        })}
      </SelectedList>
    </Container>
  );
};

const Container = styled.article`
  margin: 1rem;
  padding: 1rem;

  h4 {
    margin: 0 1rem 1rem 0;
  }
`;

const SelectedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default SelectedTags;
