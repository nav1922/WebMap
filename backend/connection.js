const mongoose = require("mongoose")

const url = "mongodb+srv://nav1922175:navneet123@cluster0.05ulp3a.mongodb.net/WebMap?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log("server connected to database");
}).catch((err) => {
    console.log(err);
})

module.exports =  mongoose
