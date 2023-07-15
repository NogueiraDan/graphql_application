import { addPet, editPet, deletePet } from './mutations/pets.mutations.js'
import { listPets, getPet } from './queries/pets.queries.js'

/*
Um Schema é uma coleção de definições de tipo (daí "typeDefs")
que juntos definem a "forma" das consultas executadas em seus dados.
*/ 
export const typeDefs = `#graphql
  # OBJECT TYPES
  # Este tipo "Pet" define os campos que podem ser consultados para cada animal de estimação em nossa fonte de dados.
  type Pet {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  # INPUT TYPES
  # Define os objetos de entrada para mutações "addPet" e "editPet"
  input PetToEdit {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  input PetToAdd {
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  # O tipo "Query" é especial: lista todas as consultas disponíveis que
  # clientes podem executar, juntamente com o tipo de retorno para cada um.
  # Nesse caso, a consulta "pets" retorna uma matriz de zero ou mais animais de estimação.
  
  # QUERY TYPES
  type Query {
    pets: [Pet],
    pet(id: ID!): Pet
  }

  # MUTATION TYPES
  type Mutation {
    addPet(petToAdd: PetToAdd!): Pet,
    editPet(petToEdit: PetToEdit!): Pet,
    deletePet(id: ID!): [Pet],
  }
`

export const resolvers = {
    // Os resolvedores contêm a implementação real de nossas queries e mutations.
    // Resolvers for Queries
    Query: {
        pets: () => listPets(),
        pet: (_, { id }) => getPet(id)
    },

    // Resolvers for Mutations
    Mutation: {
        addPet: (_, { petToAdd }) => addPet(petToAdd),
        editPet: (_, { petToEdit }) => editPet(petToEdit),
        deletePet: (_, { id }) => deletePet(id)
    }
}