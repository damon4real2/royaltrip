const express = require('express')
const cors = require('cors')
// const twilio = require('twilio')


const accountSid = 'AC2c72fc17d6f7deb45f7fc3b2a405800f';
const authToken = '641e884014fb771bb0ed6c88d39c087c';
const client = require('twilio')(accountSid, authToken)

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is running on port 4000")
})

app.get('/send-text', (req, res) => {
    const { recipient, textmessage } = req.query

    client.messages.create({
        body: textmessage,
        to: "+234" + recipient,
        from: '+12058272581'
    }).then((message) => console.log(message.body))


})



app.listen(4000, () => console.log("Running on port 4000"))