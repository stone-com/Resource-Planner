const { AuthenticationError } = require('apollo-server-express');
const { Project, Resource, User, Customer } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //project queries
    getAllProjects: async () => {
      return Project.find({});
    },
    getSingleProject: async (parent, { projectId }) => {
      return Project.findById(projectId);
    },
    // resource queries
    getAllResources: async () => {
      return Resource.find({});
    },
    getSingleResource: async (parent, { projectId }) => {
      return Resource.findById(projectId);
    },
    getAllResources: async () => {
      return await Resource.find({}).populate('assignedProjects');
    },

    //User queries
    getUser: async () => {
      return User.findOne({ userName });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addProject: async (
      parent,
      { requiredSkillsdescription, title, allocation, requiredResNumber }
    ) => {
      return await Project.create({
        requiredSkillsdescription,
        title,
        allocation,
        requiredResNumber,
      });
    },
    updateProject: async (
      parent,
      { projectId, completed, requiredResNumber }
    ) => {
      return await Project.findOneAndUpdate(
        { _id: projectId },
        { completed: completed, requiredResNumber: requiredResNumber }
      );
    },
    // Resource Mutations
    addResource: async (parent, { personName }) => {
      return await Resource.create({ personName });
    },
    //User Mutations - login and signup
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({
        userName,
        email,
        password,
        // customerId: context.customer.customerId,
      });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
