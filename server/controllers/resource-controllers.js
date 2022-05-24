const { Project ,Resource} = require('../models');

module.exports = {
    async createResource(req, res) {
        try {
            const resource = await Resource.create(req.body);
            res.status(200).json(resource);
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "cannot create resource please try again"});
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
    //   const resource = await Resource.create(req.body);
  
    //   if (!resource) {// 500 means that can't create something
    //     return res.status(500).json({ message: "cannot create resource please try again"});
    //   }
  
    //   res.status(200).json(resource);
    },
    async getResources(req,res){
        try {
            const resources= await Resource.find({})
            if(!resources){ //400 can't find it
                return res.status(400).json({message:"can't find the resource you're required to look for"})
                } 
            return res.status(200).json(resources);
          } catch (error) {
            console.log(error);
            return res.status(500).json(error);
          }
//       const resources= await Resource.find({})
//   if(!resources){ //400 can't find it
//   return res.status(400).json(reosurces)
//   } 
//   res.json(resources)
  
  },
//   async createResource(req,res){
//   const resource=await Resource.create(req.body);
//   if(!resource){
//     res.send('error')
//   }
//   res.json(resource)
//   },
  
   
    
    async editResource(req, res) {
      console.log(req.body.completed&&req.body.resourceId)
      try {
        const resources= await Resource.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }

        )
        if(!resources){ //400 can't find it
            return res.status(400).json({message:"can't find the resource you're required to look for"})
            } 
        return res.status(200).json(resources);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }

    },
    async removeResource(req,res){
      const resource=await Resource.deleteOne({_id:req.params.id})
  if(!resource){
    res.send('Error through deleting resource')
  }
  res.send('This recource deleted succesfully')
  
  
    },
    async getSingleResource(req,res){
      const resource=await Resource.findById(req.params.id).populate('assignedProjects');
      res.json(resource)
  
    },
    
  
    
  };
  