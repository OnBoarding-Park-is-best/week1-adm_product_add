import { useState, useCallback } from 'react';
import { deepCopy } from '@utils';
import { Product, Option, AdditionalOption } from '@class';

const getProductIdFromEvent = (e) => {
  const element = e.target.closest('.product');
  return Number(element.dataset.productId);
};

const getOptionIdFromEvent = (e) => {
  const element = e.target.closest('.option');
  return Number(element.dataset.optionId);
};

const getAdditionalOptionIdFromEvent = (e) => {
  const element = e.target.closest('.additionalOption');
  return Number(element.dataset.additionalOptionId);
};

const countOptions = (e) => {
  const element = e.target.closest('.product');
  const options = element.querySelectorAll('.option');
  return options.length;
};

const useOptionSelector = () => {
  const [products, setProducts] = useState([]);

  const handleProductAdd = useCallback(() => {
    setProducts((products) => [...products, new Product()]);
  }, []);

  const handleProductDelete = useCallback((e) => {
    const id = getProductIdFromEvent(e);
    setProducts((products) => products.filter((_, idx) => idx !== id));
  }, []);

  const handleOptionAdd = useCallback(
    (e) => {
      const productId = getProductIdFromEvent(e);
      const copiedProduct = deepCopy(products[productId]);
      copiedProduct.options.push(new Option());
      setProducts((products) =>
        products.map((one, idx) => (productId !== idx ? one : copiedProduct)),
      );
    },
    [products],
  );

  const handleOptionDelete = useCallback(
    (e) => {
      if (countOptions(e) === 1) {
        handleProductDelete(e);
        return;
      }
      const product = products[getProductIdFromEvent(e)];
      const optionId = getOptionIdFromEvent(e);
      const copiedProduct = deepCopy(product);
      copiedProduct.options = product.options.filter(
        (_, idx) => optionId !== idx,
      );
      setProducts((products) =>
        products.map((one) => (one !== product ? one : copiedProduct)),
      );
    },
    [products, handleProductDelete],
  );

  const handleAdditionalAdd = useCallback(
    (e) => {
      const productId = getProductIdFromEvent(e);
      const optionId = getOptionIdFromEvent(e);
      const copiedProduct = deepCopy(products[productId]);
      const copiedOption = deepCopy(products[productId].options[optionId]);
      copiedOption.additionalOptions.push(new AdditionalOption());
      copiedProduct.options[optionId] = copiedOption;
      setProducts((products) =>
        products.map((one, idx) => (productId !== idx ? one : copiedProduct)),
      );
    },
    [products],
  );

  const handleAdditionalDelete = useCallback(
    (e) => {
      const productId = getProductIdFromEvent(e);
      const optionId = getOptionIdFromEvent(e);
      const additionalId = getAdditionalOptionIdFromEvent(e);
      const product = products[productId];
      const option = product.options[optionId];
      const copiedProduct = deepCopy(product);
      const copiedOption = deepCopy(option);
      copiedOption.additionalOptions = option.additionalOptions.filter(
        (_, idx) => idx !== additionalId,
      );
      copiedProduct.options[optionId] = copiedOption;
      setProducts((products) =>
        products.map((one, idx) => (productId !== idx ? one : copiedProduct)),
      );
    },
    [products],
  );

  return {
    products,
    handleProductAdd,
    handleProductDelete,
    handleOptionAdd,
    handleOptionDelete,
    handleAdditionalAdd,
    handleAdditionalDelete,
  };
};

export default useOptionSelector;
