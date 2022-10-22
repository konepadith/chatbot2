
const {chatbots} = require("./chatbot.service")

module.exports={
    chatbots: (req,res)=>{
        chatbots((err,code)=>{
            
            return res.json({
                success:1,
                data:req.body.qr
            })
        })
    }, 
}
