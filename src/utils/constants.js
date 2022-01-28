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
