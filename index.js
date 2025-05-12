const express = require("express");
const app = express();
app.use(express.json());

app.post('/webhook-handler', (req,res)=>{
    console.log("received");
    console.log(req.body);
    res.status(200).send("received");
})

app.listen(3000,()=>{
    console.log("webhook handler listning on port on 3000")
})