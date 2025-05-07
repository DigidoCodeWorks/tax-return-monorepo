// src/lib/graphql/client.ts
import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  process.env.GRAPHQL_ENDPOINT || 'http://localhost:3100/graphql',
  {
    headers: {
      // You can dynamically inject headers later if needed (e.g. auth)
    },
  },
);
