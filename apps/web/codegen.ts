import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['lib/graphql/**/*.ts'],
  generates: {
    'lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
