// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://alguazas.stepzen.net/api/flabby-anteater/__graphql',
  headers: {'Authorization':'apikey alguazas::stepzen.io+1000::53766db128fba48ff85678bc8bd0faa00a77dce0157e026e23b4a0dd11423bdf'},
  cache: new InMemoryCache(),
}); 

export default client;