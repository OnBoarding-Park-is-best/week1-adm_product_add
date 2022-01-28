import React, { useState } from 'react';
import ImageUploadContainer from '@components/domain/ImageUploadContainer';
import ContentContainer from '@components/base/ContentContainer';
import ContentItem from '@components/base/ContentItem';
import CheckBox from '@components/base/CheckBox';
import styled from 'styled-components';
import Button from '@components/base/Button';
import { FILTER_LIST, BORDER_STYLE } from '@utils/constants';

const ProductBaseInfo = () => {
  const [categoryChecked, setCategoryChecked] = useState([]);

  const checkedHandler = (e) => {
    if (e.target.checked === true) {
      setCategoryChecked([...categoryChecked, e.target.name]);
    } else if (e.target.checked === false) {
      setCategoryChecked(
        categoryChecked.filter((categoryChk) => categoryChk !== e.target.name),
      );
    }
  };

  console.log('categoryChecked', categoryChecked);

  return (
    <div>
      <ContentContainer title={'상품 기본 정보'}>
        <ContentItem title={'카테고리'} required>
          <CategoryWrap>
            <div>
              {FILTER_LIST.map((list) => {
                return <CheckBox onChange={checkedHandler} name={list.title} />;
              })}
            </div>
            <aside>
              {categoryChecked &&
                categoryChecked.map((chk) => {
                  return (
                    <Button selectCategory width="100%">
                      {chk}
                    </Button>
                  );
                })}
            </aside>
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
  padding: 1rem;
  gap: 1rem;

  & > div {
    flex: 2;
    padding: 1rem;
    border: ${BORDER_STYLE};
    overflow-y: scroll;
    height: 15rem;
  }

  & > aside {
    flex: 1;

    padding: 1rem;
    border: ${BORDER_STYLE};
  }
`;

export default ProductBaseInfo;
