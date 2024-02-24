import { http, graphql, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Galt',
    })
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
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
    })
  }),
]