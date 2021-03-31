import gql from 'graphql-tag';

export const AllUsers = gql`
  query AllUsers {
    allUsers {
      id
    }
  }
`;

export const CurrentUser = gql`
  query CurrentUser {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

export const Singin = gql`
  mutation Signin($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export const Signout = gql`
  mutation Signout {
    endSession
  }
`;

export const CreateUser = gql`
  mutation CreateUser($name: String, $email: String, $password: String) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

export const SendResetPasswordLink = gql`
  mutation ResetPassword($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export const Reset_Password = gql`
  mutation Reset_Password(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      token: $token
      email: $email
      password: $password
    ) {
      code
      message
    }
  }
`;
