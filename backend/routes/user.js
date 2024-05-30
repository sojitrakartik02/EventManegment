const express = require('express')
const router = express.Router()
const User = require('../model/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Abhiisgoodb@oy'

//create a user ||method:POST

router.post('/createuser',[
    // check validation here...
    body('email','Enter valid email').isEmail(),
    body('password','The password should be at least 8 characters long.The password should contain at least one uppercase letter, one lowercase letter, and one number, and one symbol.').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,}),
    body('contactno','Mobile number should contains 10 digits').isLength({ min: 10, max: 10 })
], async (req,res)=>{
    const error = validationResult(req)
    let success = false
    if(!error.isEmpty()){
        const errorMsg = error.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    }

    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    try{
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({error:"Sorry email is already exists"})
        }

        user = await User.create({
            fname:req.body.fname,
            email:req.body.email,
            password:secPass,
            country:req.body.country,
            contactno:req.body.contactno,
            role:req.body.role
        })
        const data = {
            user: {
                id: user.id
            }
        }

        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
        return jwtData
    }catch(error){
        console.log(error.message)
        return res.status(500).send('Internal Server Error')
    }
})

//user login ||method:POST

router.post('/login',[
    // check validation here...
    body('email','Enter a valid email').isEmail(),
    body('password','Password can not be blank').exists(),
],
async (req,res)=>{
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    };
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        let passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        data = {
            user:{
                id:user.id
            }
        }
        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

// update user profile || method : PUT 

router.put('/updateuser/:id',fetchuser,[
    body('email','Enter valid email').isEmail(),
    body('contactno','Mobile number should contains 10 digits').isLength({ min: 10, max: 10 })
],async(req,res)=>{
    let success = false
    const error = validationResult(req)
    if(!error.isEmpty()){
        const errorMsg = error.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    }
    try {
        const {fname,lname,email,country,contactno,gender,detail,image} = req.body
        const newProfile = {}
        if(fname){newProfile.fname=fname}
        if(lname){newProfile.lname=lname}
        if(email){newProfile.email=email}
        if(country){newProfile.country = country}
        if(contactno){newProfile.contactno = contactno}
        if(gender){newProfile.gender = gender}
        if(detail){newProfile.detail=detail}
        if(image){newProfile.image = image}
        let user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).send("Not found")
        }
        user = await User.findByIdAndUpdate(req.params.id,{$set:newProfile})
        success = true
        res.json({success,user})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

//get user details || method:GET

router.get("/getuser",async (req,res)=>{
    let success = false
    try {
        const user = await User.find().select('-password')
        success = true
        res.send({success,user})
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }

})

module.exports = router