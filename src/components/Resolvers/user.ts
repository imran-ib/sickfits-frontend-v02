import gql from 'graphql-tag';

export const AllUsers = gql`
  query AllUsers {
    allUsers {
      id
    }
  }
`;
