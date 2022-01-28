import { NO_DISCOUNT } from '@utils/constants';

export class AdditionalOption {
  name = '';
  normalPrice = '';
}

export class Option {
  name = '';
  normalPrice = '';
  sellPrice = '';
  stock = '';
  tax = '비과세'; // 과세, 비과세
  additionalOptions = [];
}

export class Product {
  image = '';
  options = [new Option()];
}
