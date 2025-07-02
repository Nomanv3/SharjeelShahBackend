const {sendMail} = require('../services/mailService')

const reviewController = async (req,res) =>{
    console.log(req.body)
   console.log('the page is working fine')
   
   const {username , email , message} = req.body

   await sendMail(
      "SharjeelShah",                         // receiver email
      `New Review from ${username}`,
      `Email: ${email}\nMessage: ${message}`
    )

   try {
   if(!username && !email && !message){
    return res.json({message:"All feilds are required" , status:404})
   }

   res.send('got the user messages')


   } catch (error) {
      res.json({message:"server error 400" , status:400})
   }

}



module.exports = {reviewController}