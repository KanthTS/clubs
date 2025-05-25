const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
         type:String,
        required:true
    },
    profileImageUrl:{
           type:String,
        required:true
    },
    isActive:{
        type:Boolean,
    
    }
},{'strict':'throw'})

const studentModel=mongoose.model('student',studentSchema)
module.exports=studentModel;