import { useProductQuery, useUpdateProductMutation } from '@/generated/graphql';
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useForm } from '../Hooks/useForm';
import FormStyles from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

interface Props {
  id: string;
}

const UpdateProduct: React.FC<Props> = ({ id }) => {
  const router = useRouter();

  const {
    data: Productdata,
    loading: Productloading,
    error: Producterror,
  } = useProductQuery({ variables: { id } });

  const [updateProduct, { data, loading, error }] = useUpdateProductMutation();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { ChangeHandler, state, ClearForm } = useForm(Productdata?.Product);

  if (loading || Productloading) return <p>Loading...</p>;
  if (error || Producterror) return <p>{Producterror?.message}</p>;
  if (!Productdata?.Product) return <p>No Items Found</p>;

  return (
    <FormStyles
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            name: state.name,
            price: state.price,
            description: state.description,
          },
        });
        ClearForm();
        router.push(`/product/${res.data?.updateProduct?.id}`);
      }}
    >
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="name">
          Name
          <input
            onChange={ChangeHandler}
            value={state.name}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Add some Description"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange={ChangeHandler}
            value={state.description}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            onChange={ChangeHandler}
            value={state.price}
            type="number"
            name="price"
            id="price"
            placeholder="Price"
          />
        </label>
        <button type="submit">Update Product</button>
      </fieldset>
    </FormStyles>
  );
};

export default UpdateProduct;
