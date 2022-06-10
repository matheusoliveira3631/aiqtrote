import mongoose from "mongoose"

const missaoSchema = mongoose.Schema({
    missao:{
        type:Text,
        required:true
    },
    doutor:{
        type:Text,
        required:true
    },
    tempo:{
        type:Date,
        required:true
    }
})

const Missao = mongoose.model("missao", missaoSchema)
export default Missao