import { PageLayout } from '@/components/layout';
import IndexContent from '@/components/pages/index/IndexContent';

const Index = () => {
  return (
    <PageLayout pageName='index'>
      <h1>Index page</h1>

      <IndexContent />
    </PageLayout>
  );
};

export default Index;
