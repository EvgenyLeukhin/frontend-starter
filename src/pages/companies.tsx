import { PageLayout } from '@/components/layout';
import CompaniesContent from '@/components/pages/companies/CompaniesContent';

const Companies = () => {
  return (
    <PageLayout pageName='companies'>
      <h1>Companies page</h1>

      <CompaniesContent />
    </PageLayout>
  );
};

export default Companies;
