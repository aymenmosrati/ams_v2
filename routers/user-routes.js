const express=require('express')
const route=express.Router()
const db=require('../models')
const userController=require('../controllers/userController')

route.post('/register_entreprise',(req,res,next)=>{
    userController.register_entreprise(req.body.nom,req.body.prenom,req.body.telephone,req.body.email,req.body.password,req.body.adress,req.body.mobile,req.body.contact,req.body.web)
    .then(response=>res.status(200).json(response))
    .catch((err)=>res.status(400).json(err))
})

route.post('/register_consultant',(req,res,next)=>{
    userController.register_consultant(req.body.nom,req.body.prenom,req.body.telephone,req.body.email,req.body.password,req.body.adress)
    .then(response=>res.status(200).json(response))
    .catch((err)=>res.status(400).json(err))
})

route.post('/login',(req,res,next)=>{
    userController.login(req.body.email,req.body.password)
    .then(token=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json({err:err}))
})

route.get('/getAll',(req,res,next)=>{
    userController.getAll_users()
    .then(users=>res.status(200).json(users))
    .catch((err)=>res.status(400).json({err:err}))
})

route.get('/getbyId/:id',(req,res,next)=>{
    userController.getbyId_user(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch((err)=>res.status(400).json({err:err}))
})

route.patch('/update_user/:id',(req,res,next)=>{
    userController.update_user(req.params.id,req.body.nom,req.body.prenom,req.body.telephone,req.body.email,req.body.password,req.body.adress)
    .then(response=>res.status(200).json(response))
    .catch((err)=>res.status(400).json(err))
})

route.delete('/delete_user/:id',(req,res,next)=>{
    userController.delete_user(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch((err)=>res.status(400).json({err:err}))
})
module.exports=route