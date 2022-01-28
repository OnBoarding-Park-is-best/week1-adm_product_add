import { OptionSelector } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';
import { Delivery } from '@components/domain';
import { useState } from 'react';

const App = () => {
  const optionSelector = useOptionSelector();
  // const { products } = optionSelector; // data 사용할 때 주석 해제해서 쓰세용

  return (
    <>
      {/* <OptionSelector {...optionSelector} /> */}
      <Delivery />
    </>
  );
};

export default App;
