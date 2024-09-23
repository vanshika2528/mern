const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://22it117:<db_password>@cluster0.re4t9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db