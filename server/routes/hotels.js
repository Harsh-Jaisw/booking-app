import express  from "express";
import { deleteHotel, getByIdHotel, getHotel, postHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router()
 
router.post("/",verifyAdmin,postHotel)


router.put("/:id",verifyAdmin,updateHotel)


router.delete("/:id",verifyAdmin,deleteHotel)

// get by particular Id hotel
router.get("/:id",getByIdHotel)

router.get("/",getHotel)

export default router 