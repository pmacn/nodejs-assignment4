const mongoose = require('mongoose')
mongoose.connect('mongodb://database/edx-course-db')

const Account = mongoose.model('Account', { name: String,
        balance: Number
})

module.exports = Account