/* eslint-disable radix */
import Layout from '@/components/layout/layout';
import { Pagination } from '@/components/Pagination/Pagination';
import Products from '@/components/Products/Products';
import { useRouter } from 'next/dist/client/router';

const ProductsPage = () => {
  const router = useRouter();
  const { query } = router;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const page = parseInt(query.page);
  return (
    <Layout>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </Layout>
  );
};

export default ProductsPage;
