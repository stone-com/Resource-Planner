import { gql } from "@apollo/client";

export const GETALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      _id
      title
      description
      requiredSkills
      allocation
      requiredResNumber
      createdAt
      completed
      assignedResources {
        personName
        availability
      }
    }
  }
`;

export const GETALL_RESOURCES = gql`
  query GetAllResources {
    getAllResources {
      _id
      personName
      availability
      assignedProjects {
        title
      }
    }
  }
`;
