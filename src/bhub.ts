import lodash from "lodash";
import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";
import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/federation";
import { GraphQLSchema } from "graphql";
import { DbConnectionRun } from "@domain/repository/db-connection";
import CustomerSchema from "@domain/schemas/customer-schema";
import CustomerResolvers from "@resolvers/customer-resolvers";
// import BankDetailsResolvers from "@resolvers/bank-details-resolver";

dotenv.config();

DbConnectionRun();

const buildSchema = () => {
  return buildSubgraphSchema([
    {
      typeDefs: gql`
        ${CustomerSchema}
      `,
      resolvers: lodash.merge(
        CustomerResolvers
        //  BankDetailsResolvers
      ),
    },
  ]);
};

const buildServer = (schema: GraphQLSchema) => {
  return new ApolloServer({
    schema: schema,
    context: ({ req }) => ({
      headers: req.headers,
    }),
    introspection: true,
  });
};

const runServer = async () => {
  const schema = buildSchema();
  const server = buildServer(schema);
  const port = process.env.APOLLO_SERVER_PORT;

  server.listen({ port }).then(({ url }) => {
    console.log(`Server is now running on ${url}`);
    console.log(
      chalk.magenta(
        figlet.textSync("BHub Challenge", {
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
      )
    );
  });
};

const main = async () => {
  runServer().then();
};

main().then();
