const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    firstname: {type:String,required:true},
    lastname: {type: String, required: true},
    nickname:{ type: String, required: true},
    childname:{type:String},
    gender:{ type: String, required: true},
    homeaddress:{ type: String, required: true},
    contactnumber:{ type: String, required: true},
    birthdate:{type: Date },
    age:{type: Number},
    homephone:{type: String},
    workphone:{type: String},
    parent1name:{type: String},
    parent1relationship:{type: String},
    parent1phone:{type: String},
    parent1work:{type: String},
    parent2name:{type: String},
    parent2relationship:{type: String},
    parent2phone:{type: String},
    parent2work:{type: String},
    email:{type:String},
    doctorname:{type: String},
    doctorphone:{type: String},
    allergies:{type:String},
    other:{type:Map,of:String}
}, 
{
    timestamps: true,
});

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;