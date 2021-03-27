import Layout from '@/components/layout/layout';
import UpdateProduct from '@/components/Products/UpdateProduct';

interface Props {
  query: any;
}

const updatePage: React.FC<Props> = ({ query }) => (
  <Layout>
    <UpdateProduct id={query.id} />
  </Layout>
);

export default updatePage;
