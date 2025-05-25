const mongoose=require('mongoose')
const AdminSchema=new mongoose.Schema({
   eventId:{
    type:String,
    required:true
   },
    eventName:{
        type:String,
        required:true
    },
    eventImageUrl:{
        type:String,
        required:true
    },
    eventTitle:{
        type:String,
        required:true
    },
    eventInfo:{
        type:String,
        required:true
    },
    prizeInfo:{
        type:String,
        required:true
    },
    teamSize:{
          type:String,
        required:true
    },
    registrationInfo:{
          type:String,
        required:true
    },
    isEventActive:{
        type:Boolean

    }
    
},{'strict':'throw'})

const AdminModel=mongoose.model('admins',AdminSchema)
module.exports=AdminModel;