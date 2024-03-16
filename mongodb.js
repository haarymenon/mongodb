const mongoose = require('mongoose');
let mongo_url ="mongodb+srv://Sreehari:Sreehari@cluster0.ymnx7ec.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0"
let compass_url ='mongodb://localhost:27017/sampledb'
mongoose.connect(mongo_url).then(()=>{
    console.log("db connected");
})
.catch((err) => {
    console.log(err);
});