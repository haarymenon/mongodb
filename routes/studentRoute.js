const express = require('express');
const studentModel = require('../model/studentmodel');
const router = express.Router();
const mongodb = require("mongodb");

router.use(express.json());

router.get('/',async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
    }
    const data = await studentModel.find()
    res.send(data);
    
})
//router to add data
router.post('/add',async(req,res)=>{
    try {
        var item = req.body;
        await studentModel(item).save();
        res.send("data added");
    } catch (error) {
        console.log(error)
    }
        
})

router.put('/edit/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndUpdate(id,item);
        res.send("data updated")
    } catch (error) {
        console.log(error);
    }
})

router.delete('/remove/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndDelete(id,item);
        res.send("data delete")
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;