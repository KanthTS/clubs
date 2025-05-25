const exp=require('express')
const studentApp=exp.Router()
const studentModel=require('../Models/StudentModel')
studentApp.get('/students',async(req,res)=>{
    const r=req.body
    const re=await studentModel.find()
    res.send({message:"get details",payload:re})
})
studentApp.post('/student',async(req,res)=>{
    const r=req.body
    const n=await new studentModel(r)
    const resu=await n.save()
    res.send({message:"posted",payload:resu})
})
studentApp.put('/student/:studentId',async(req,res)=>{
    const r=req.body
    const p=req.params.studentId
    console.log(r)
    const m=await studentModel.findByIdAndUpdate(p,{...r},{new:true})
    console.log(r._id)
    res.send({message:"updated",payload:m})
})
module.exports=studentApp;