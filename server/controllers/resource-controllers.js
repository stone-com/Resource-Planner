const { Project, Resource } = require('../models');

module.exports = {
  async createResource(req, res) {
    console.log(req.body)
    const result = await Resource.create(req.body);

    if (!result) {
      return res.status(400).json({ message: 'Unable to create resouecs' });
      console.log('error')
    }

    res.status(200).json(result);
    console.log('not errrorrr', result)

  },
  async getResources(req, res) {

    const resources = await Resource.find({})
    if (!resources) { //400 can't find it
      return res.status(400).json({ message: "can't find the resource you're required to look for" })
    }
    return res.status(200).json(resources);

  },


  //       const resources= await Resource.find({})
  //   if(!resources){ //400 can't find it
  //   return res.status(400).json(reosurces)
  //   } 
  //   res.json(resources)

  
  //   async createResource(req,res){
  //   const resource=await Resource.create(req.body);
  //   if(!resource){
  //     res.send('error')
  //   }
  //   res.json(resource)
  //   },



  async editResource(req, res) {
    console.log(req.body.completed && req.body.resourceId)
    try {
      const resources = await Resource.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }

      )
      if (!resources) { //400 can't find it
        return res.status(400).json({ message: "can't find the resource you're required to look for" })
      }
      return res.status(200).json(resources);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }

  },
  async removeResource(req, res) {
    const resource = await Resource.deleteOne({ _id: req.params.id })
    if (!resource) {
      res.send('Error through deleting resource')
    }
    res.send('This recource deleted succesfully')


  },
  async getSingleResource(req, res) {
    const resource = await Resource.findById(req.params.id).populate('assignedProjects');
    res.json(resource)

  },



};
