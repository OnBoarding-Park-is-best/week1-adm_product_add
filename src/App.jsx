import React, { useCallback } from 'react';
import { Layout, OptionSelector, ProductBaseInfo } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';

const App = () => {
  const optionSelector = useOptionSelector();
  const { products } = optionSelector;
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (products.length === 0) {
        alert('상품 옵션을 하나 이상 등록하셔야 합니다.');
        return;
      }
      console.log('saved!');
      console.log(products);
    },
    [products],
  );

  return (
    <Layout>
      <form id="register" onSubmit={handleSubmit}>
        <ProductBaseInfo />
        <OptionSelector {...optionSelector} />
      </form>
    </Layout>
  );
};

export default App;
