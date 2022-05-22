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

    //User queries
    getUser: async() =>{
      return User.findOne({username})
    }

  },
  Mutation:{
    addProject:async(parent,{requiredSkillsdescription,title,allocation,requiredResNumber})=>{
return await Project.create({requiredSkillsdescription,title,allocation,requiredResNumber})
},
updateProject:async(parent,{projectId,completed,requiredResNumber})=>{
 return await Project.findOneAndUpdate(
    {_id:projectId},
    {completed:completed,requiredResNumber:requiredResNumber}
  )

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
