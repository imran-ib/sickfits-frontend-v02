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
  query Product($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      status
      price
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const CreateProduct = gql`
  mutation CreateProduct(
    $name: String
    $description: String
    $image: Upload
    $price: Int
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        status: "AVAILABLE"
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
    }
  }
`;

export const updateProduct = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
    }
  }
`;
