import React from 'react';
import { useResetPasswordMutation } from '@/generated/graphql';
import { useForm } from '../Hooks/useForm';
import Form from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

const ReqReset = () => {
  const { state, ChangeHandler, resetForm } = useForm({
    name: ``,
    email: ``,
    password: ``,
  });
  const [
    resetPasswordMutation,
    { data, loading, error },
  ] = useResetPasswordMutation({
    variables: {
      email: state.email,
    },
  });

  return (
    <Form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        await resetPasswordMutation();
        resetForm();
      }}
    >
      <DisplayError error={error} />
      <h1>Request Reset Password</h1>
      <fieldset disabled={loading}>
        {data?.sendUserPasswordResetLink === null && (
          <p>Reset link Has been emailed to youe</p>
        )}

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

        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
};

export default ReqReset;
