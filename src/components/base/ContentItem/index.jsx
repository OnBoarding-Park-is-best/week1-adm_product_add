import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, BORDER_STYLE } from '@utils/constants';

const ContentItem = ({ title, required, children, borderNone }) => {
  return (
    <Container>
      <Title>
        <h3>{`${title}${required ? ' *' : ''}`}</h3>
      </Title>
      <Content>{children}</Content>
    </Container>
  );
};

ContentItem.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node,
};

ContentItem.defaultProps = {
  required: false,
};

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0;
  border-bottom: ${BORDER_STYLE};

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  padding: 1em 0.75em;
  width: 8.5em;
  background-color: ${COLORS.grey_30};
  border-right: ${BORDER_STYLE};
`;

const Content = styled.div`
  width: calc(100% - 8.5em);
`;

export default ContentItem;
