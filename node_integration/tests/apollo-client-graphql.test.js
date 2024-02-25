import { expect, test } from 'vitest'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

test('Checks mocked Apolo client response', async () => {
  const client = new ApolloClient({
    uri: 'https://api.example.com/graphql',
    cache: new InMemoryCache(),
  });

  const listBooksQuery = gql`
    query ListMovies {
      movies {
        title
      }
    }`

  const response = await client.query({
    query: listBooksQuery,
  });

  expect(response).toEqual({
    data: {
      books: [
        {
          title: 'The Fountainhead',
        },
        {
          title: 'The Kite Runner',
        },
        {
          title: 'The Alchemist',
        },
      ],
    },
    loading: false,
    networkStatus: 7
  })

})