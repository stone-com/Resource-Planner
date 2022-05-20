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
 type Query{
  getAllprojects:[Project]!  
  getAllResources:[Resource]! 
  getSingleProject(projectId:ID!): Project

 }
 type Mutation{
     addProject(requiredSkills:String!,description:String!,title:String!,allocation:Int!,requiredResNumber:Int!):Project
     updateProject(projectId:ID!,completed:Boolean!,requiredResNumber:Int!):Project

    }

`;

module.exports = typeDefs;
