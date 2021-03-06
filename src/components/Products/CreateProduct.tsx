import {
  useCreateProductMutation,
  AllProductDocument,
} from '@/generated/graphql';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useForm } from '../Hooks/useForm';
import FormStyles from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

const CreateProduct = () => {
  const router = useRouter();
  const { ChangeHandler, state, ClearForm } = useForm({
    image: ``,
    name: `Nice Shoes`,
    price: 1235,
    description: `Greate Shoes`,
  });
  const [createProduct, { data, loading, error }] = useCreateProductMutation({
    variables: state,
    refetchQueries: [{ query: AllProductDocument }],
  });

  return (
    <FormStyles
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createProduct();
        ClearForm();
        router.push(`/product/${res.data?.createProduct?.id}`);
      }}
    >
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="image">
          Image
          <input onChange={ChangeHandler} type="file" name="image" id="image" />
        </label>
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
        <button type="submit">Add Product</button>
      </fieldset>
    </FormStyles>
  );
};

export default CreateProduct;
