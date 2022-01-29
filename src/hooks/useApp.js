import { useState, useEffect, useCallback } from 'react';
import useOptionSelector from '@hooks/useOptionSelector';
import { TotalInfo } from '@class';

const useApp = () => {
  const [isModalOn, setModalOn] = useState(false);
  const [appState, setAppState] = useState(new TotalInfo());
  const optionSelector = useOptionSelector();
  const { products } = optionSelector;
  const [isBenefit, setBenefit] = useState(true);
  const [isPresent, setPresent] = useState(false);
  // 각 state 끌어올린 것 여기에 추가

  useEffect(() => {
    setAppState((prev) => ({
      ...prev,
      products,
      isPresent,
      isBenefit,
      // isPickup: state명, // 끌어올린 state 이름이 다른 경우
    }));
  }, [products, isBenefit, isPresent]);
  // }, [products, isBenefit, isPresent, state명]);
  // @class/TotalInfo에서 각자 맞는 이름 찾아 넣기

  const toggleModal = useCallback((e) => {
    if (e.target.classList.contains('modal-toggle')) {
      setModalOn((prev) => !prev);
    }
  }, []);

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
      setModalOn(true);
    },
    [products.length],
  );

  return {
    appState,
    isModalOn,
    toggleModal,
    optionSelector,
    isBenefit,
    isPresent,
    handleOthersChange,
    handleSubmit,
    // Domain에 handler 내려줘야 할 때에는 이 파일에서 작성하고 여기서 return한 후에 App에서 받아 내려주기
  };
};

export default useApp;
