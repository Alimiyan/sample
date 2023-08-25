import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      input: {
        email: $email
        password: $password
      }
    ) {
      token {
        accessToken
        refreshToken
      }
    }
  }
`;

export { LOGIN };