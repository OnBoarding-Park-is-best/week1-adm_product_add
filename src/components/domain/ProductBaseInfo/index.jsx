import React from 'react';
import ImageUploadContainer from '../ImageUploadContainer';
import ContentContainer from '../../base/ContentContainer';
import ContentItem from '../../base/ContentItem';
import CheckBox from '../../base/CheckBox';
import styled from 'styled-components';
import { FILTER_LIST } from '@utils/constants';

const ProductBaseInfo = () => {
  return (
    <div>
      <ContentContainer title={'상품 기본 정보'}>
        <ContentItem title={'카테고리'} required>
          <CategoryWrap>
            <div>
              <CheckBox name={'abc'}></CheckBox>
            </div>
            <aside>aa</aside>
          </CategoryWrap>
        </ContentItem>
      </ContentContainer>
      <ImageUploadContainer multiple />
    </div>
  );
};

const CategoryWrap = styled.article`
  display: flex;
  align-items: flex-start;

  div {
  }

  aside {
  }
`;

export default ProductBaseInfo;
