import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ['./src/lib/graphql/**/*.ts'],
  generates: {
    './src/lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
