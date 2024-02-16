const users = require('../Models/userModel')

exports.register = async (req,res)=>{
    console.log("Inside REGISTER API");
    const {firstname,lastname,address,email,gender,mobile,password,dob,course} = req.body
    console.log(firstname,lastname,address,email,gender,mobile,password,dob,course);

    try{
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("Account already exists... Please Login")
        }
        else{
            const newUser = new users({
                firstname,lastname,address,email,gender,mobile,password,dob,course
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getStudentDetails = async (req,res)=> {
    try{
        const studentDetails = await users.find();
        res.status(200).json(studentDetails)
    }
    catch(err){
        res.status(401).json(err);
    }
}