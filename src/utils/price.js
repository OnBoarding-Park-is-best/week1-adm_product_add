const addComma = (str) => {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const removeComma = (str) => {
  return String(str).replace(/[^\d]+/g, '');
};

export const inputNumberFormat = (value) => {
  return addComma(removeComma(value));
};
