const exp=require('express')
const adminApp=exp.Router()
const adminModel=require('../Models/AdminModel')
const handler=require('express-async-handler')
adminApp.post('/admin',handler(async(req,res)=>{
    const r=req.body
    const newAdmin=await new adminModel(r)
    const re=await newAdmin.save()
    res.send({message:"posted",payload:re})
}))
adminApp.get('/admins',handler(async(req,res)=>{
    
    const re=await adminModel.find({})
    res.status(200).send({message:"get details",payload:re})
}))

adminApp.put('/admin/:eventId',handler(async(req,res)=>{

  const r=req.body
  const m=await adminModel.findOneAndUpdate(r._id,{...r},{new:true})
  res.send({message:"updated",payload:m})
}))
adminApp.put('/admins/:eventId',handler(async(req,res)=>{
  const p=req.params.eventId
console.log(p)
  const m=await adminModel.findOneAndDelete(p)
  res.send({message:"deleted",payload:m})
}))

module.exports=adminApp;