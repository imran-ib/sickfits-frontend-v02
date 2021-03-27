import Layout from '@/components/layout/layout';
import SingleProduct from '@/components/Products/SingleProduct';

interface Props {
  query: any;
}

const ProductPage: React.FC<Props> = ({ query }) => (
  <Layout>
    <SingleProduct id={query.id} />
  </Layout>
);

export default ProductPage;
