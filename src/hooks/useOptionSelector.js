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
    setProducts((prev) => [...prev, new Product()]);
  }, []);

  const handleProductDelete = useCallback((e) => {
    const id = getProductIdFromEvent(e);
    setProducts((prev) => prev.filter((_, idx) => idx !== id));
  }, []);

  const handleOptionAdd = useCallback((e) => {
    const productId = getProductIdFromEvent(e);
    setProducts((prev) => {
      const copiedProduct = deepCopy(prev[productId]);
      copiedProduct.options.push(new Option());
      return prev.map((one, idx) => (productId !== idx ? one : copiedProduct));
    });
  }, []);

  const handleOptionDelete = useCallback(
    (e) => {
      if (countOptions(e) === 1) {
        handleProductDelete(e);
        return;
      }
      const optionId = getOptionIdFromEvent(e);

      setProducts((prev) => {
        const product = prev[getProductIdFromEvent(e)];
        const copiedProduct = deepCopy(product);
        copiedProduct.options = product.options.filter(
          (_, idx) => optionId !== idx,
        );
        return prev.map((one) => (one !== product ? one : copiedProduct));
      });
    },
    [handleProductDelete],
  );

  const handleAdditionalAdd = useCallback((e) => {
    const productId = getProductIdFromEvent(e);
    const optionId = getOptionIdFromEvent(e);
    setProducts((prev) => {
      const copiedProduct = deepCopy(prev[productId]);
      const copiedOption = deepCopy(prev[productId].options[optionId]);
      copiedOption.additionalOptions.push(new AdditionalOption());
      copiedProduct.options[optionId] = copiedOption;
      return prev.map((one, idx) => (productId !== idx ? one : copiedProduct));
    });
  }, []);

  const handleAdditionalDelete = useCallback((e) => {
    const productId = getProductIdFromEvent(e);
    const optionId = getOptionIdFromEvent(e);
    const additionalId = getAdditionalOptionIdFromEvent(e);
    setProducts((prev) => {
      const product = prev[productId];
      const option = product.options[optionId];
      const copiedProduct = deepCopy(product);
      const copiedOption = deepCopy(option);
      copiedOption.additionalOptions = option.additionalOptions.filter(
        (_, idx) => idx !== additionalId,
      );
      copiedProduct.options[optionId] = copiedOption;
      return prev.map((one, idx) => (productId !== idx ? one : copiedProduct));
    });
  }, []);

  const handleImageChange = useCallback((e, src) => {
    const productId = getProductIdFromEvent(e);
    setProducts((prev) => {
      const copiedProduct = deepCopy(prev[productId]);
      copiedProduct.img = src;
      return prev.map((one, idx) => (productId !== idx ? one : copiedProduct));
    });
  }, []);

  const handleInputChange = (e) => {
    const productId = getProductIdFromEvent(e);
    const optionId = getOptionIdFromEvent(e);
    const additionalId = getAdditionalOptionIdFromEvent(e);
    console.log(productId, optionId, additionalId);
  };

  return {
    products,
    handleProductAdd,
    handleProductDelete,
    handleOptionAdd,
    handleOptionDelete,
    handleAdditionalAdd,
    handleAdditionalDelete,
    handleImageChange,
    handleInputChange,
  };
};

export default useOptionSelector;
