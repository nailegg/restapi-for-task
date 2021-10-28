const mongoose = require('mongoose');

// Define Schemes
const taskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  due: {type: String, required: true},
  //completed: { type: String, default: false }
});

// Create new todo document
taskSchema.statics.create = function (payload) {
  // this === Model
  const task = new this(payload);
  // return Promise
  return task.save();
};

// Find All
taskSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
taskSchema.statics.findOneByTaskid = function (id) {
  return this.findOne({ id });
};

// Update by todoid
taskSchema.statics.updateByTaskid = function (id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ id }, payload, { new: true });
};

// Delete by todoid
taskSchema.statics.deleteByTaskid = function (id) {
  return this.remove({ id });
};

// Create Model & Export
const Task = mongoose.model('Task', taskSchema);
module.exports = Task