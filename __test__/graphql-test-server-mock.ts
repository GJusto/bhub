import dotenv from "dotenv";
import { buildSubgraphSchema } from "@apollo/federation";
import { ApolloServer, gql } from "apollo-server";
import { DbConnectionTest } from "./db-connection-test";
import CustomerSchema from "../src/domain/schemas/customer-schema";
import CustomerResolvers from "../src/resolvers/customer-resolvers";
import makeSut from "../__test__/resolvers/make-sut";

dotenv.config();

DbConnectionTest();

const customerServiceMock = makeSut();

const buildSchema = () => {
  return buildSubgraphSchema([
    {
      typeDefs: gql`
        ${CustomerSchema}
      `,
      resolvers: CustomerResolvers,
    },
  ]);
};

const graphqlTestServerMock = async (
  query: any,
  headers?: any,
  variables?: any
) => {
  const server = new ApolloServer({
    schema: buildSchema(),
    context: () => ({
      headers,
    }),
    introspection: true,
  });

  return await server.executeOperation({
    query,
    variables,
  });
};

export { graphqlTestServerMock, customerServiceMock };
