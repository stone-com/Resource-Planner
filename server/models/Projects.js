const moment = require('moment');
const { Schema, model } = require('mongoose');
const projectSchema = new Schema({
  title: {
    type: String,
    required:true,

  },

  description: {
    type: String,
    required:true,

  },
  
  allocation: {
    type: Number,
    default:0
  },

  requiredResNumber: {
    type: Number,
    default:4
  },
  completed: {
    type: Boolean,
    default:false
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