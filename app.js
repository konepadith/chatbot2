const qrcode = require('qrcode-terminal');
require("dotenv").config();
const axios = require('axios')
const express = require('express')
const app = express()
const path = require('path')
const publicPath =path.join(__dirname,'public')
app.use(express.json())
const chatbotRouter = require("./api/chatbots/chatbot.router")
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

var qrScan = 'Wait'
// app.use(express.static(publicPath))  
app.use("/api/chatbots" ,chatbotRouter)
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log(qr)
    return qrScan = qr
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    const content = message.body
	// if(content === 'ສະບາຍດີ') {
	// 	const meme = await axios("https://meme-api.herokuapp.com/gimme")
    //     .then(res =>res.data)
    //     client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
    //     // client.sendMessage(message.from, 'hello world')
	// }else if (content === 'pls joke') {
    //     const joke = await axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political")
    //     .then(res=>res.data)
    //     const jokeMsg = await client.sendMessage(message.from, joke.joke)
    //     if (joke.delivery) setTimeout(function(){jokeMsg.reply(joke.delivery)},5000)
            
    // }

    switch (content) {
        case 'ສະບາຍດີ':
            // const meme = await axios("https://meme-api.herokuapp.com/gimme")
            // .then(res =>res.data)
            client.sendMessage(message.from,'ສະບາຍດີຈາກບໍລິສັດ Oceano ຈຳກັດ ຍິນດີຕ້ອນຮັບ\nພິມ 1 ເພື່ອຕິດຕໍ່ສະໝັກວຽກ\n ພິມ 2 ພົວພັນວຽກງານຝ \n*****\nພະນັກງານຈະຕິດຕໍ່ກັບໄປພາຍຫຼັງ')
            break;
        case '1':
            // const meme = await axios("https://meme-api.herokuapp.com/gimme")
            // .then(res =>res.data)
            client.sendMessage(message.from,'ກະລຸນາສົ່ງ CV ພ້ອມລະບຸ ຊື່, ນາມສະກຸນ ພ້ອມດ້ວຍຕຳແໜ່ງສາຍງານທີ່ຕ້ອງການສະມັກ\nພະນັກງານຈະຕິດຕໍ່ກັບໄປພາຍຫຼັງ')
            break;
        case '2':
            // const meme = await axios("https://meme-api.herokuapp.com/gimme")
            // .then(res =>res.data)
            client.sendMessage(message.from,'ກະລຸນາລະບຸຊື່ ແລະ ນາມສະກຸນ \nພະນັກງານຈະຕິດຕໍ່ກັບໄປພາຍຫຼັງ')
            break;
        default:
            break;
    }
});


client.initialize();

app.listen(process.env.APP_PORT,()=>{
	console.log('Node App is running on port :',process.env.APP_PORT )
})