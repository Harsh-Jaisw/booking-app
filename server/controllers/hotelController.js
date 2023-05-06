import hotel from "../models/hotel.js";

export const postHotel=async(req,res,next)=>{
    const newHotel=new hotel(req.body)

    try {
     const savedHotel=await newHotel.save()
     res.status(200).json(savedHotel)   
    } catch (error) {
        next(error)
    }
}

export const updateHotel=async(req,res,next)=>{
    try {
        const updatedHotel=await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)   
       } catch (error) {
           next(error)
       }
}

export const deleteHotel=async(req,res,next)=>{
    try {
        await hotel.findByIdAndDelete(
            req.params.id
        )
     res.status(200).json("hotel has been deleted.")   
    } catch (error) {
        next(error)
    }
}

export const getByIdHotel=async(req,res,next)=>{
    try {
        const foundHotel=await hotel.findById(req.params.id)
      res.status(200).json(foundHotel)   
     } catch (error) {
         next(error)
     }
}

export const getHotel=async(req,res,next)=>{
  // const failed=true
    // if(failed) return next(createError(401,"You are not authenticated."))
    try {
        const hotels= await hotel.find()
      res.status(200).json(hotels)   
     } catch (error) {
         next(error)
     }
}