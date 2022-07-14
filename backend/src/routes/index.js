import express from "express"
import {router as userRouter} from "./user.js" 

const fRouter = express.Router()

fRouter.use("/user", userRouter)

export {fRouter}