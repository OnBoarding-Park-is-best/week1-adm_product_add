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

export const INFORMATION_NOTICE_CONTENT_LIST = [
  {
    title: '제품명 / 중량',
    placeholder: '제품명 / 중량을 입력해 주세요.',
  },
  {
    title: '원산지 / 원재료 함량',
    placeholder: '원산지 / 원재료 함량을 입력해 주세요.',
  },
  {
    title: '등급',
    placeholder: '등급(근내지방도 수치)를 입력해 주세요.',
  },
  {
    title: '보관',
    placeholder: '보관 방식을 입력해 주세요.',
  },
  {
    title: '식품 유형',
    placeholder: '식품 유형을 입력해 주세요.(ex) 포장육',
  },
];

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

export const TAX_OPTIONS = ['비과세', '과세'];

export const NO_DISCOUNT = '할인율 없음';

export const FORMAT_NAME = ['normalPrice', 'sellPrice', 'stock'];

export const PERIOD_NAME = ['제한없음', '미노출', '노출 기간 설정'];

export const DATE_NAME = {
  orderStart: null,
  orderEnd: null,
  express: null,
  normal: null,
};

export const NAV_BAR_CONTENT = [
  {
    title: '회원',
  },
  {
    title: '진열',
  },
  {
    title: '상품',
  },
  {
    title: '상품 리스트',
    href: '/',
  },
  {
    title: '상품 재고 관리',
    href: '/',
  },
  {
    title: '상품 등록',
    href: '/',
    current: true,
  },
  {
    title: '주문',
  },
  {
    title: '배송',
  },
  {
    title: '프로모션',
  },
  {
    title: '혜택',
  },
  {
    title: '고객 센터 관리',
  },
  {
    title: '알림',
  },
];
