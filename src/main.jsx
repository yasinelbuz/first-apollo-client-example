import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
	uri: "https://spacex-production.up.railway.app/",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
);
