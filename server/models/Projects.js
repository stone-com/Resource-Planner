const moment = require('moment');
const { Schema, model } = require('mongoose');
const projectSchema = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  requiredSkills: {
    type: String,
  },
  allocation: {
    type: Number,
  },

  requiredResNumber: {
    type: Number,
  },
  completed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: moment(new Date()).format('YYYY-MM-DD'),
  },
  assignedResources: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Resources',
    },
<<<<<<< HEAD
    assignedResources:[{
        
            type: Schema.Types.ObjectId,
            ref: 'Resource',
            }]
=======
  ],
>>>>>>> 41b133c875ad5de6f216a89e335421ca907ab7e2
});
const Project = model('Project', projectSchema);

module.exports = Project;
//add comment