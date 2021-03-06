const moment = require('moment');
const { Schema, model } = require('mongoose');
const projectSchema = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  allocation: {
    type: Number,
    default: 0,
  },

  requiredResNumber: {
    type: Number,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: moment(new Date()).format('YYYY-MM-DD'),
  },
  assignedResources: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Resource',
    },
  ],
});
const Project = model('Project', projectSchema);

module.exports = Project;
//add comment
