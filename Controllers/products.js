const Userinfo = require('../Models/Userinfo')

exports.read = async(req,res)=>{
    try{
        //code
        const id = req.params.id

        const submited = await Userinfo.find({_id:id}).exec();
        res.send(submited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async(req,res)=>{
    try{
        //code
        const submited = await Userinfo.find({}).exec();

        res.send(submited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res)=>{
    try{
        //code
        console.log(req.body)
        const submited = await Userinfo(req.body).save()
        res.send(submited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req,res)=>{
    try{
        //code
        const id = req.params.id
        const updated = await Userinfo.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        res.send(updated)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req,res)=>{
    try{
        //code
        const id = req.params.id
        const removed = await Userinfo.findOneAndDelete({_id:id}).exec()
        res.send(removed)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}