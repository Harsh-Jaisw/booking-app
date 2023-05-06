import express  from "express";
import { deleteHotel, getByIdHotel, getHotel, postHotel, updateHotel } from "../controllers/hotelController.js";

const router=express.Router()
 
router.post("/",postHotel)


router.put("/:id",updateHotel)


router.delete("/:id",deleteHotel)

// get by particular Id hotel
router.get("/:id",getByIdHotel)

router.get("/",getHotel)

export default router 