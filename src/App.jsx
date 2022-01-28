import { Layout, OptionSelector } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';

const App = () => {
  const optionSelector = useOptionSelector();
  // const { products } = optionSelector; // data 사용할 때 주석 해제해서 쓰세용
  return (
    <Layout onSave={() => console.log('saved!')}>
      <OptionSelector {...optionSelector} />
    </Layout>
  );
};

export default App;
