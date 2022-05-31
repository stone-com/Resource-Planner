import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_RESOURCE = gql`
  mutation addResource($personName: String!) {
    addResource(personName: $personName) {
      _id
      personName
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($description: String!, $title: String!, $allocation: Int!, $requiredResNumber: Int!, $assignedResources: [ID]) {
  addProject(description: $description, title: $title, allocation: $allocation, requiredResNumber: $requiredResNumber, assignedResources: $assignedResources) {
    title
    description
    allocation
    requiredResNumber
    createdAt
    assignedResources {
      _id
    }
  }
}
`;

export const UPDATE_PROJECT =gql`
  mutation updateProject($projectId: ID!, $description: String, $title: title, $completed: Boolean,$requiredResNumber: Int, $assignedResources: [ID])
  updateProject(projectId: $projectId, description: $description, title: $title, requiredResNumber: $requiredResNumber, completed: $complete, requiredResNumber: $requiredResNumber){
    _id
    title
    description
    requiredResNumber
    completed
    assignedResources {
      _id
    }
  }

`
