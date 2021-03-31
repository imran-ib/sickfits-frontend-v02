import React from 'react';
import { useSigninMutation, CurrentUserDocument } from '@/generated/graphql';
import { useForm } from '../Hooks/useForm';
import Form from '../styles/Form';
import DisplayError from '../utils/Error/ErrorMessage';

const Signin = () => {
  const { state, ChangeHandler, resetForm } = useForm({
    email: ``,
    password: ``,
  });
  const [signinMutation, { data, loading }] = useSigninMutation({
    variables: {
      email: state.email,
      password: state.password,
    },
    refetchQueries: [{ query: CurrentUserDocument }],
  });
  const ReturenedError =
    // eslint-disable-next-line no-underscore-dangle
    data?.authenticateUserWithPassword.__typename ===
    `UserAuthenticationWithPasswordFailure`
      ? data.authenticateUserWithPassword
      : undefined;
  return (
    <Form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        await signinMutation();
        resetForm();
      }}
    >
      <DisplayError error={ReturenedError} />
      <h1>Sign Into Your Account</h1>
      <fieldset disabled={loading}>
        <label htmlFor="Newemail">
          Email
          <input
            type="email"
            name="email"
            id="Newemail"
            value={state.email}
            onChange={ChangeHandler}
          />
        </label>
        <label htmlFor="NewPassword">
          Password
          <input
            type="password"
            name="password"
            id="NewPassword"
            value={state.password}
            onChange={ChangeHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
};

export default Signin;
