import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs, resolvers } from './pets/index.js'

// O construtor do ApolloServer requer dois parâmetros: O Schema de Typedefs
// e o conjunto de Resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Passando uma instância ApolloServer para a função `startStandaloneServer`:
// 1. cria um aplicativo Express
// 2. instala sua instância ApolloServer como middleware
// 3. prepara seu aplicativo para lidar com solicitações recebidas
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`🚀  Server ready at: ${url}`)