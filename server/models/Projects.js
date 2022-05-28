const moment = require('moment');
const { Schema, model } = require('mongoose');
const projectSchema = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
<<<<<<< HEAD
=======
  
>>>>>>> 0f0c9c0ceb927aff941452fe694733d6bd5baa2b
  allocation: {
    type: Number,
    default:0
  },

  requiredResNumber: {
    type: Number,
  },
  completed: {
    type: Boolean,
<<<<<<< HEAD
    default: false,
=======
    default:false
>>>>>>> 0f0c9c0ceb927aff941452fe694733d6bd5baa2b
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
  ],
});
const Project = model('Project', projectSchema);

module.exports = Project;
//add comment