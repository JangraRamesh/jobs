const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:{type:Number},
    policyHolderName:{type: String, required: true},
    policyAmount:{type: Number, required: true},
    maturityDate:{ type: Date, default: Date.now },
    address:{type: String, required: true},
    contact:{type: Number, required: true},maturitydate:{type: Date},
    pincode:Number,
    vehicleid:{type: String, required: true},
    companyname:{type: String, required: true},
    model:{type: String, required: true},
    serialno:{type: String, required: true},
    purchaseyear:Number,
    userID: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }    
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Policy', schema);

