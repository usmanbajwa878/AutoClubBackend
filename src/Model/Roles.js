const mongoose = require('mongoose');

//worker
//manager

const Roles = mongoose.Schema({
    roleId:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    key:{type:String,required:true},
    permissions:{type:Array,required:true}
})


module.exports = mongoose.Model('roles',Roles)