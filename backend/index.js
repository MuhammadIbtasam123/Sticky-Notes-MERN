const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get('/notes',(req,res) => {
    const notes = [{
        title:"Learning MERN, code with Ahsan.",
        description:"MERN is a full stack framework for web development."
    },{
        title:"Learning MERN, code with hitesh choudhary.",
        description:"MERN is a full stack framework for web development"
    }]
    res.send({
        notes:notes
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
});