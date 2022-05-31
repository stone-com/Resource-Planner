const { Project, Resource } = require('../models');

module.exports = {
  async createProject(req, res) {
    console.log('body!!', req.body);
    const project = await Project.create({
      title: req.body[1].title,
      description: req.body[1].description,
      requiredResNumber: req.body[1].requiredResNumber,

      allocation: req.body[1].allocation,
      createdAt: req.body[1].createdAt,
      assignedResources: req.body[0] || [],
    });

    project.assignedResources.map((id) => {
      Resource.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: { assignedProjects: project._id },
          $inc: { availability: -project.allocation },
        },
        { new: true, runValidators: true },
        function (err, updated) {
          if (err) return handleError(err);
          // console.log('%s %s is a %s.', updated);
        }
      );
    });

    if (!project) {
      return res
        .status(400)
        .json({ message: 'cannot create project please try again' });
    }

    res.status(200).json(project);
  },

  async getprojects(req, res) {
    const projects = await Project.find({});
    if (!projects) {
      return res.send('Erorr through Get projects!');
    }
    res.send(projects);
  },
  async createResource(req, res) {
    const resource = await Resource.create(req.body);
    if (!resource) {
      res.send('error');
    }
    res.json(resource);
  },
  // perhaps remove it if we don't use it

  async editproject(req, res) {
    console.log(req.body.completed && req.body.resourceId);
    if (req.body.completed || req.body.resourceId) {
      const project = await Project.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          completed: req.body.completed,
          $addToSet: {
            assignedResources: req.body.resourceId,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log('here0');
      if (!project) {
        res.send('error');
      }
      res.json(project);
    } else {
      const project = await Project.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          completed: req.body.completed,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log('here000');

      if (!project) {
        res.send('error');
      }
      res.json(project);
    }
  },
  async removeproject(req, res) {
    const project = await Project.deleteOne({ _id: req.body.id });
    if (!project) {
      res.send('Error through deleting project');
    }
    res.send('This project deleted succesfully');
  },
  async getSingleproject(req, res) {
    const project = await Project.findById(req.params.id).populate(
      'assignedResources'
    );
    res.json(project);
  },
};
