import mongoose from "../db"

const raloSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    qtd:{
        type:String,
        required:true
    }
})

const Ralo = mongoose.model("ralo", raloSchema)
export default Ralo