import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(root);

// Render your App inside the ApolloProvider using the new API
appRoot.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
