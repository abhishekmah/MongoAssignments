const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017/test", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify: true
    })
}

module.exports = connect