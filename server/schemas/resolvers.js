const { AuthenticationError } = require('apollo-server-express');
const { Project,Resource, User, Customer} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query:{
    //project queries
    getAllprojects:async()=>{
      return Project.find({})
    },
    getSingleProject:async(parent,{projectId})=>{
return Project.findById(projectId)
    },
    getAllResources:async()=>{
return await Resource.find({}).populate('assignedProjects')
    },

    //User queries
    getUser: async() =>{
      return User.findOne({username})
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
  Mutation:{
    addProject:async(parent,{description,title,requiredResNumber})=>{
return await Project.create({description,title,requiredResNumber})
},
updateProject:async(parent,{projectId,completed,requiredResNumber})=>{
 return await Project.findOneAndUpdate(
    {_id:projectId},
    {completed:completed,requiredResNumber:requiredResNumber}
  )

},
addResource:async(parent,{personName})=>{
  return await Resource.create({personName})

},
//User Mutations - login and signup
addUser: async (parent, { username, email, password }, context) => {
  const user = await User.create({ username, email, password, customerId: context.customer.customerId });
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

  }
};

module.exports = resolvers;
