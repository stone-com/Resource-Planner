const { Project ,Resource} = require('../models');

module.exports = {
  async createProject(req, res) {
    const project = await Project.create(req.body);

    if (!project) {
      return res.status(400).json({ message: "cannot create project please try again"});
    }

    res.status(200).json(project);
  },
  async getprojects(req,res){
    const projects= await Project.find({})
if(!projects){
return res.send('Erorr through Get projects!')
} 
res.send(projects)

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
