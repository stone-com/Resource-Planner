const { Project,Resource } = require('../models');

const resolvers = {
  Query:{
    getAllprojects:async()=>{
      return Project.find({})
    },
    getSingleProject:async(parent,{projectId})=>{
return Project.findById(projectId)
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

}

  }
};

module.exports = resolvers;
