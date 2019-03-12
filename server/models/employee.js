const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, require: true },
    office: { type: String, required: true},
    salary: { type: Number, required: true}
});

module.exports = mongoose.model('Employee', EmployeeSchema);
