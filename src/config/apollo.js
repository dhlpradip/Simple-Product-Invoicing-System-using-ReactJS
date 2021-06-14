import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://www.predic8.de/fruit-shop-graphql",
  cache: new InMemoryCache(),
});
