const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
scalar Date

 type Project{
     title:String
     description:String
     requiredSkills:String
     allocation:Int
     requiredResNumber:Int
     createdAt: Date
     completed:Boolean
     assignedResources:[Resource]

}
type Resource{
    personName:String
    personPhoto:String
    availability:Int
    assignedProjects:[Project]



}

type User{
    _id: ID
    username: String
    email: String
    password: String
    customerId: Customer!
}

type Customer{
    customerId: ID
    customerName: String
    users: [User]!
}

type Auth{
    token: ID!
    user: User
}

type Query{
    getAllprojects:[Project]!  
    getAllResources:[Resource]! 
    getSingleProject(projectId:ID!): Project
    
    getUser(username: String!): User

}
type Mutation{
    addProject(requiredSkills:String!,description:String!,title:String!,allocation:Int!,requiredResNumber:Int!):Project
    updateProject(projectId:ID!,completed:Boolean!,requiredResNumber:Int!):Project
    
    addUser(username: String!, email: String!, password: String!, customerId: ID!): Auth
    login(email: String!, password: String!): Auth

}

`;

module.exports = typeDefs;
