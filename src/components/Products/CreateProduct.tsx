import React from 'react';
import { useForm } from '../Hooks/useForm';
import FormStyles from '../styles/Form';

const CreateProduct = () => {
  const { ChangeHandler, state } = useForm({
    image: ``,
    name: `Nice Shoes`,
    price: 1235,
    description: `Greate Shoes`,
  });

  return (
    <FormStyles
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
      }}
    >
      <fieldset>
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
