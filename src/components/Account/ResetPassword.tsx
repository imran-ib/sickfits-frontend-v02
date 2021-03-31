import React from 'react';
import { useReset_PasswordMutation } from '@/generated/graphql';
import { useForm } from '../Hooks/useForm';
import Form from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

interface Props {
  token: string;
}

const ResetPassword: React.FC<Props> = ({ token }) => {
  const { state, ChangeHandler, resetForm } = useForm({
    email: ``,
    password: ``,
  });
  const [
    resetPasswordMutation,
    { data, loading, error: NetworkError },
  ] = useReset_PasswordMutation({
    variables: {
      email: state.email,
      password: state.password,
      token,
    },
  });

  const error = data?.redeemUserPasswordResetToken?.code
    ? data.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        await resetPasswordMutation();
        resetForm();
      }}
    >
      <DisplayError error={error || NetworkError} />
      <h1>Reset Your Password</h1>
      <fieldset disabled={loading}>
        {data?.redeemUserPasswordResetToken?.code === null && (
          <p>Success! You can login now </p>
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

export default ResetPassword;
