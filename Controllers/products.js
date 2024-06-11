exports.read = async(req,res)=>{
    res.send('Hello Controller Read')
}

exports.list = async(req,res)=>{
    try{
        //code
        res.send('Hello List')
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res)=>{
    try{
        //code
        res.send('Hello Create')
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req,res)=>{
    try{
        //code
        res.send('Hello Update')
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req,res)=>{
    try{
        //code
        res.send('Hello Delete')
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}