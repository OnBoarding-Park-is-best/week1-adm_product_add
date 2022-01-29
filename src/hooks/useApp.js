import { useState, useEffect, useCallback } from 'react';
import useOptionSelector from '@hooks/useOptionSelector';
import { TotalInfo } from '@class';

const useApp = () => {
  const [isModalOn, setModalOn] = useState('flex');
  const [appState, setAppState] = useState(new TotalInfo());
  const optionSelector = useOptionSelector();
  const { products } = optionSelector;
  const [isBenefit, setBenefit] = useState(true);
  const [isPresent, setPresent] = useState(false);

  useEffect(() => {
    setAppState((prev) => ({ ...prev, products, isPresent, isBenefit }));
  }, [products, isBenefit, isPresent]);

  const handleOthersChange = useCallback((e) => {
    const name = e.target.name;
    if (name === 'benefit') {
      setBenefit((prev) => !prev);
      return;
    }
    if (name === 'present') {
      setPresent((prev) => !prev);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (products.length === 0) {
        alert('상품 옵션을 하나 이상 등록하셔야 합니다.');
        return;
      }
      setModalOn('flex');
      console.log('saved!');
      console.log(appState);
    },
    [products.length, appState],
  );

  return {
    appState,
    isModalOn,
    optionSelector,
    isBenefit,
    isPresent,
    handleOthersChange,
    handleSubmit,
  };
};

export default useApp;
