import { v4 } from 'uuid';

export const COLORS = {
  purple_90: '#3f1c6f', // 저장하기 뒷배경 및 보더 컬러
  purple_50: '#2a19bc', // 토글 컬러
  purple_30: '#aea7e4',
  yellowgreen: '#dffcd4',
  grey: '#9f9f9f', // 토글 회색
  grey_60: '#e3e3e3', // 짙은 회색 배경 (상품 옵션)
  grey_30: '#fbfbfb', // 옅은 배경 회색
  grey_10: '#efefef', // 매우 옅은 회색 (이미지 첨부 배경)
  border: '#e3e3e3', // border 컬러
  red: '#cd4950', // 삭제버튼
  green: '#50c24e',
};

export const BORDER_STYLE = `2px solid ${COLORS.border}`;

export const FILTER_LIST = [
  { id: v4(), title: '안심' },
  { id: v4(), title: '등심' },
  { id: v4(), title: '채끝' },
  { id: v4(), title: 'Bone' },
  { id: v4(), title: '특수' },
  { id: v4(), title: '양념' },
  { id: v4(), title: '돼지' },
  { id: v4(), title: '밀키트' },
  { id: v4(), title: '선물세트' },
  { id: v4(), title: '가니쉬' },
  { id: v4(), title: '샤키테리' },
];

export const FILTER_TAGS = [
  { id: v4(), title: '안심' },
  { id: v4(), title: '등심' },
  { id: v4(), title: '채끝' },
  { id: v4(), title: 'Bone' },
  { id: v4(), title: '특수' },
  { id: v4(), title: '양념' },
  { id: v4(), title: '돼지' },
  { id: v4(), title: '밀키트' },
  { id: v4(), title: '선물세트' },
  { id: v4(), title: '가니쉬' },
  { id: v4(), title: '샤키테리' },
];
