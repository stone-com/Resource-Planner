const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  scalar Date

  type Project {
    _id: ID
    title: String
    description: String
    requiredSkills: String
    allocation: Int
    requiredResNumber: Int
    createdAt: Date
    completed: Boolean
    assignedResources: [Resource]
  }
  type Resource {
    _id: ID
    personName: String
    availability: Int
    assignedProjects: [Project]
  }

  type User {
    _id: ID
    userName: String
    email: String
    password: String
    customerId: Customer!
  }

  type Customer {
    customerId: ID
    customerName: String
    users: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getAllProjects: [Project]!
    getAllResources: [Resource]!
    getSingleProject(projectId: ID!): Project
    getSingleResource(_id: ID!): Resource
    getUser(userName: String!): User
    me: User
  }
  type Mutation {
    addProject(
      description: String!
      title: String!
      allocation: Int!
      requiredResNumber: Int!
    ): Project
    updateProject(
      projectId: ID!
      completed: Boolean!
      requiredResNumber: Int!
    ): Project
    addResource(personName: String!): Resource
    addUser(
      userName: String!
      email: String!
      password: String!

    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
