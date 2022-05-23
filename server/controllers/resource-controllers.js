const { Project ,Resource} = require('../models');

module.exports = {
    async createResource(req, res) {
      const resource = await Resource.create(req.body);
  
      if (!resource) {
        return res.status(400).json({ message: "cannot create resource please try again"});
      }
  
      res.status(200).json(resource);
    },
    async getresources(req,res){
      const resources= await Project.find({})
  if(!resources){
  return res.send('Erorr through Get resources!')
  } 
  res.send(resources)
  
  },
  async createResource(req,res){
  const resource=await Resource.create(req.body);
  if(!resource){
    res.send('error')
  }
  res.json(resource)
  },
  
   
    
    async editproject(req, res) {
      console.log(req.body.completed&&req.body.resourceId)
  if(req.body.completed||req.body.resourceId){
  
      const project = await Project.findOneAndUpdate(
        { _id: req.params.id },
        { completed:req.body.completed,$addToSet:{assignedResources:req.body.resourceId}},
        { new: true,runValidators:true }
      );
      console.log('here0')
      if(!project){
        res.send('error')
  
      }
      res.json(project)
    
    }else{
      const project = await Project.findOneAndUpdate(
        { _id: req.params.id },
        {completed:req.body.completed},
        { new: true,runValidators:true }
      );
      console.log('here000')
  
      if(!project){
        res.send('error')
  
      }
      res.json(project)
    }
    },
    async removeproject(req,res){
      const project=await Project.deleteOne({_id:req.body.id})
  if(!project){
    res.send('Error through deleting project')
  }
  res.send('This project deleted succesfully')
  
  
    },
    async getSingleproject(req,res){
      const project=await Project.findById(req.params.id).populate('assignedResources');
      res.json(project)
  
    },
    
  
    
  };
  