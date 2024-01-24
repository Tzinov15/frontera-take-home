import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://caregiver.frontera.health/apis/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: false,
  noSilentErrors: true,
  verbose: true,
};

export default config;
