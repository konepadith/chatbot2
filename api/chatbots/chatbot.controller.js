var  qrScan = require( '../../app')
const {chatbots} = require("./chatbot.service")

module.exports={
    chatbots: (req,res)=>{
        chatbots((err,code)=>{
            // if (err) {
            //     console.log(err)
            //     return
            // }
            console.log(qrScan)
            return res.json({
                success:1,
                data:qrScan
            })
        })
    }, 
}
