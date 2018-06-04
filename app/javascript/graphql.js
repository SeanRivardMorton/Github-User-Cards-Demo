import gql from 'graphql-tag';

export const USER_LANGUAGE_QUERY = gql`
  query UserLanguageQuery($login: String!) {
    user(login: $login) {
      name
      email
      repositories(first: 50) {
        edges {
          node {
            languages(first: 50) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
