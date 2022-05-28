const { Schema, model } = require('mongoose');

const resourceSchema = new Schema({
  personName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  availability: {
    type: Number,
    default: 100,
  },
  assignedProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;
