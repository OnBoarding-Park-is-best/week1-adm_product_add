export class AdditionalOption {
  name = '';
  normalPrice = '';
}

export class Option {
  name = '';
  normalPrice = '';
  sellPrice = '';
  discountPercent = ''; // normalPrice와 sellPrice로 계산
  stock = '';
  tax = '비과세'; // 과세, 비과세
  additionalOptions = [];
}

export class Product {
  image = '';
  options = [];
}
