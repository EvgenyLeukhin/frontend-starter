import { PageLayout } from '@/components/layout';
import TestContent from '@/components/pages/test/TestContent';

const Test = () => {
  return (
    <PageLayout pageName='test'>
      <h1>Test page</h1>

      <TestContent />
    </PageLayout>
  );
};

export default Test;
