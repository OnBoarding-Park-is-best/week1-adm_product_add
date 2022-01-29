import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_STYLE } from '@utils/constants';

const ContentContainer = ({ title, required, children }) => {
  return (
    <Container>
      <ContentTitle>
        <h2>{`${title}${required ? '*' : ''}`}</h2>
      </ContentTitle>
      {children}
    </Container>
  );
};

ContentContainer.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node,
};

ContentContainer.defaultProps = {
  required: false,
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;

  border: ${BORDER_STYLE};
`;

const ContentTitle = styled.div`
  padding: 1em 0.75em;
  font-weight: bold;
  border-bottom: ${BORDER_STYLE};
`;

export default ContentContainer;
