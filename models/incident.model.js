const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const incident = new Schema({
    dateofincident:{type: Date, required: true, default: Date.now},
    incidentinfo:{type: String, required: true},
    incidentaddress:{type: String, required: true},
    dateoffir:Date,
    nameofpolicestaion:{type: String},
    firnumber:{type: String},
    photos:{type: Object} ,   
    comments: { type: String },
});
incident.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Incident', incident);
