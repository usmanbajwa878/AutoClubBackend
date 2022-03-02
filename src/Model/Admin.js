const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    adminId: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber:{type:String,required:true},
    role:{type:String,required:true,ref:'roles'},//admin
});

module.exports = mongoose.model('admin',Admin)