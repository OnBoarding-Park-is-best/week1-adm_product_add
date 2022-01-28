import React from 'react';
import ImageUploadContainer from '../ImageUploadContainer';
import ContentContainer from '../../base/ContentContainer';
import ContentItem from '../../base/ContentItem';

const ProductBaseInfo = () => {
  return (
    <div>
      <ContentContainer title={'상품 기본 정보'}>
        <ContentItem title={'카테고리'} required></ContentItem>
      </ContentContainer>
      <ImageUploadContainer multiple />
    </div>
  );
};

export default ProductBaseInfo;
