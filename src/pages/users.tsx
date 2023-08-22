import { PageLayout } from '@/components/layout';
import UsersContent from '@/components/pages/users/UsersContent';

const Users = () => {
  return (
    <PageLayout pageName='users'>
      <h1>Users page</h1>

      <UsersContent />
    </PageLayout>
  );
};

export default Users;
