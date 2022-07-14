import bcrypt from 'bcryptjs';
import User from "../schemas/users.js"

const userController = {
    createUser: async (req, res)=>{
        try{
            const {userName, email, password, isAdmin} = req.body
            if(await User.findOne({userName:userName}) || await User.findOne({email:email})){
                res.status(409).json({message:'User already exists'})
            }else{
            User.create({
                userName,
                email,
                password: await bcrypt.hash(password, 10),
                isAdmin
            }, (err, doc)=>{
                if(err){res.status(500).json({message:err})}
                res.status(201).json(doc)
            }) 
        }
        } catch(err){
            console.log(err)
            res.status(500).json({message:err})
        }
    },
    editUSer: async (req, res) =>{
        const {userName, email, password, isAdmin} = req.body
        try {
            const Id = req.params.userId
            foundUser.findByIdAndUpdate(Id, {
                userName,
                email,
                password, 
                isAdmin
            })
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
   }

export default userController