import React, { ReactElement } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { tokenService } from '../auth/tokenService';

//const TOKEN: string = process.env.WORDPRESS_TOKEN_GRAPHQL;
const TOKEN = tokenService.getAccessToken();

export const client = new ApolloClient({
    uri: "http://ecommerce-woocommerce_wordpress_1/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authentication': 'Bearer' + TOKEN
    }
});
type Props = {
    children: ReactElement
}
export const ECApolloClient = ({children}: Props) => {
    return (<ApolloProvider client={client}>
        {children}
    </ApolloProvider>);
}
