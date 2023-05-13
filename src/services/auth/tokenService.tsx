import nookies from 'nookies';
import { client } from '../apolloClient/apolloClient';
import { gql } from '@apollo/client';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

export async function AuthToken() {

    try {
        const { data } = await client.mutate({
          mutation: gql`
            mutation LoginUser {
              login(input: {
                clientMutationId: "uniqueId",
                username: "visitante",
                password: "senhavisitante"
              }) {
                authToken
              }
            }
          `
        });
    
        const authToken = data?.login?.authToken;
        if (authToken) {
          nookies.set(null, ACCESS_TOKEN_KEY, authToken, {
            maxAge: 300, 
            path: '/',
          });
        }
        return authToken;
      } catch (error) {
        console.error('Error refreshing auth token:', error);
    }
}

export const tokenService = {

    getAccessToken(ctx = null) {
        const cookies = nookies.get(ctx);
        return cookies[ACCESS_TOKEN_KEY] || '';
    }
};
