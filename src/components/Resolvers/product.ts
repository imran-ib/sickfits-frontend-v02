import gql from 'graphql-tag';

export const AllProduct = gql`
  query AllProduct {
    allProducts {
      id
      name
      price
      description
      status

      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`;
export const Product = gql`
  query Product {
    Product(where: { id: "" }) {
      id
      name
      price
      description
      status

      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`;
