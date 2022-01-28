import React, { useCallback } from 'react';
import { Layout, OptionSelector } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';

const App = () => {
  const optionSelector = useOptionSelector();
  const { products } = optionSelector; // data 사용할 때 주석 해제해서 쓰세용
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (products.length === 0) {
        alert('상품 옵션을 하나 이상 등록하셔야 합니다.');
      }
      console.log(products);
    },
    [products],
  );

  return (
    <Layout>
      <form id="register" onSubmit={handleSubmit}>
        <OptionSelector {...optionSelector} />
      </form>
    </Layout>
  );
};

export default App;
