import { NO_DISCOUNT } from '@utils/constants';

const addComma = (str) => {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const removeComma = (str) => {
  return String(str).replace(/[^\d]+/g, '');
};

export const inputNumberFormat = (value) => {
  return addComma(removeComma(value));
};

export const calcDiscount = (normalPrice, sellPrice) => {
  if (normalPrice === sellPrice) {
    return NO_DISCOUNT;
  }
  const normal = Number(removeComma(normalPrice));
  const sell = Number(removeComma(sellPrice));
  const result = Math.floor(((normal - sell) / normal) * 100);
  if (isFinite(result)) {
    return `${result}%`;
  }
  return '-%';
};
