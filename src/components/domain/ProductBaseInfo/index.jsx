import React, { useState } from 'react';
import ImageUploadContainer from '@components/domain/ImageUploadContainer';
import ContentContainer from '@components/base/ContentContainer';
import ContentItem from '@components/base/ContentItem';
import CheckBox from '@components/base/CheckBox';
import styled from 'styled-components';
import Button from '@components/base/Button';
import Input from '@components/base/Input';
import FilterTags from '@components/domain/ProductBaseInfo/FIlterTag';
import SelectedTags from '@components/domain/ProductBaseInfo/SelectedTags';
import { FILTER_LIST, BORDER_STYLE, FILTER_TAGS } from '@utils/constants';
import { v4 } from 'uuid';

const ProductBaseInfo = () => {
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [showFilterTagSearch, setShowFilterTagSearch] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTag, setSearchTag] = useState('');

  const filteredTags = FILTER_TAGS.filter((tag) => {
    if (searchTag == '') {
      return tag;
    } else if (tag.title.toLowerCase().includes(searchTag.toLowerCase())) {
      return tag;
    }
  });

  const checkedHandler = (e) => {
    if (e.target.checked === true) {
      setCategoryChecked([...categoryChecked, e.target.name]);
    } else if (e.target.checked === false) {
      setCategoryChecked(
        categoryChecked.filter((categoryChk) => categoryChk !== e.target.name),
      );
    }
  };

  const removeFilter = (e) => {
    setCategoryChecked(
      categoryChecked.filter(
        (categoryChk) => categoryChk !== e.target.innerText,
      ),
    );
    FILTER_LIST.filter((list) => {
      if (list.title === e.target.innerText) {
      }
    });
  };

  const showFilterTag = (e) => {
    setShowFilterTagSearch(true);
  };

  const hideFilterTag = (e) => {
    setShowFilterTagSearch(false);
  };

  const handleSelectedTags = (e) => {
    if (!selectedTags.includes(e.target.innerText))
      setSelectedTags([...selectedTags, e.target.innerText]);
  };

  const removeSelectedTag = (e) => {
    const targetText = e.target.closest('button').innerText;
    setSelectedTags((prev) => prev.filter((tag) => tag !== targetText));
  };

  return (
    <>
      <ContentContainer title="상품 기본 정보">
        <ContentItem title="카테고리" required>
          <Wrap>
            <CategorySelect>
              {FILTER_LIST.map((list) => {
                return (
                  <CheckBox
                    onChange={checkedHandler}
                    name={list.title}
                    key={list.id}
                  />
                );
              })}
            </CategorySelect>
            <CategoryBtn>
              {categoryChecked &&
                categoryChecked.map((chk, idx) => {
                  return (
                    <Button
                      onClick={removeFilter}
                      selectCategory
                      deleteIcon
                      width="100%"
                      key={idx}
                    >
                      {chk}
                    </Button>
                  );
                })}
            </CategoryBtn>
          </Wrap>
        </ContentItem>
        <ContentItem title={'필터 태그'} onBlur={hideFilterTag} tabIndex="0">
          <Wrap>
            <Input
              placeholder="필터태그를 검색해 주세요."
              onFocus={showFilterTag}
              // onBlur={hideFilterTag}
              onChange={(e) => {
                setSearchTag(e.target.value);
              }}
              height="3rem"
              padding="5rem"
              name="filterTagInput"
            />
            <BtnWrap>
              <Button
                onClick={showFilterTag}
                onBlur={hideFilterTag}
                position="absolute"
              >
                검색
              </Button>
            </BtnWrap>
          </Wrap>
          {showFilterTagSearch && (
            <FilterTags
              tagList={filteredTags}
              handleSelectedTags={handleSelectedTags}
            />
          )}
          {selectedTags.length > 0 && (
            <SelectedTags
              selectedTags={selectedTags}
              removeSelectedTag={removeSelectedTag}
            />
          )}
        </ContentItem>
        <ProductWrap>
          <ContentItem title={'상품명'} borderNone required>
            <Wrap>
              <Input
                name="productName"
                height="3rem"
                placeholder="상품명을 입력해 주세요"
              />
            </Wrap>
          </ContentItem>
          <ContentItem title={'상품 코드'}>
            <Wrap>{v4()}</Wrap>
          </ContentItem>
        </ProductWrap>
        <ContentItem title={'상품 구성 소개 정보'} required>
          <Wrap>
            <Input name="productInfo" height="3rem" />
          </Wrap>
        </ContentItem>
        <ContentItem title={'상품 썸네일'}>
          <ImageUploadContainer />
        </ContentItem>
        <ContentItem title={'상품 대표 이미지'}>
          <ImageUploadContainer multiple />
        </ContentItem>
        <ContentItem title={'상품 총 재고'} required>
          <Wrap>1023개</Wrap>
        </ContentItem>
      </ContentContainer>
    </>
  );
};

const Wrap = styled.article`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
`;

const CategorySelect = styled.div`
  flex: 2;
  padding: 1rem;
  border: ${BORDER_STYLE};
  overflow-y: scroll;
  height: 15rem;
`;

const CategoryBtn = styled.aside`
  flex: 1;
  overflow-y: scroll;
  height: 15rem;
  padding: 1rem;
  border: ${BORDER_STYLE};
`;

const ProductWrap = styled.div`
  display: flex;
  border-bottom: ${BORDER_STYLE};
`;

const BtnWrap = styled.div`
  position: absolute;
  margin-top: 5px;
  right: 1.5rem;
`;

export default ProductBaseInfo;
