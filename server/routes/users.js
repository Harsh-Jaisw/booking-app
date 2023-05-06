import express  from "express";
import { deleteUser, getByIdUser, getUser, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";
const router=express.Router()
 
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello ,you are logged in")
})


router.put("/:id",updateUser)


router.delete("/:id",deleteUser)

// get by particular Id hotel
router.get("/:id",getByIdUser)

router.get("/",getUser)

export default router