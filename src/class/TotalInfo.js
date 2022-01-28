// NOTE: 번호는 기획서 기준입니다.
class TotalInfo {
  // NOTE: 노출 및 판매기한 설정 (1-2)
  productRevealDate;
  productSellDate;

  // NOTE: 상품 기본 정보 (3-9)
  category;
  filterTags;
  productName;
  productCode;
  productInfo;
  productThumbnail;
  productImages;
  productStock;

  // NOTE: 상품 옵션 (10-12)
  products = [];

  // NOTE: 상품 소개 이미지 (13)
  introductionImages;

  // NOTE: 구매자 추천 이미지 (14)
  customerImages;

  // NOTE: 상품 정보 고시 (15)
  informationNotice;

  // NOTE: 상품 배송 설정 (16-18)
  isUserSelectedDate;
  isPickUp;
  reservedDelivery;

  // NOTE: 상품 혜택 허용 설정 (19)
  isMileage;

  // NOTE: 기타 설정 (20)
  isPresent;
}

export default TotalInfo;
