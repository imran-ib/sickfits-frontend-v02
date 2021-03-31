import React from 'react';
import {
  useCreateUserMutation,
  CurrentUserDocument,
} from '@/generated/graphql';
import { useForm } from '../Hooks/useForm';
import Form from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

const Signup = () => {
  const { state, ChangeHandler, resetForm } = useForm({
    name: ``,
    email: ``,
    password: ``,
  });
  const [signinMutation, { data, loading, error }] = useCreateUserMutation({
    variables: {
      name: state.name,
      email: state.email,
      password: state.password,
    },
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  return (
    <Form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        await signinMutation();
        resetForm();
      }}
    >
      <DisplayError error={error} />
      <h1>Create New Account</h1>
      <fieldset disabled={loading}>
        {data?.createUser && (
          <p>New User is Created.Please go ahead and signin</p>
        )}
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={ChangeHandler}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={ChangeHandler}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={state.password}
            onChange={ChangeHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
};

export default Signup;
