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

export const TAX_OPTIONS = ['비과세', '과세'];

export const NO_DISCOUNT = '할인율 없음';

export const FORMAT_NAME = ['normalPrice', 'sellPrice', 'stock'];

export const DATE_ID = ['orderStart', 'orderEnd', 'express', 'normal'];

export const DATE_NAME = {
  orderStart: null,
  orderEnd: null,
  express: null,
  normal: null,
};

export const TOGGLE_NAME = {
  departure: false,
  receipt: false,
  reservation: false,
};

export const DELIVERY_DATA = [
  {
    id: 'departure',
    title: '사용자 배송일 출발일 지정',
    dateRequire: false,
  },
  {
    id: 'receipt',
    title: '방문 수령',
    dateRequire: false,
  },
  {
    id: 'reservation',
    title: '선 주문 예약 배송',
    dateRequire: true,
  },
];
