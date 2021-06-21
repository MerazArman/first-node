const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('kisu ekta to hoise')
})
app.listen(4000, () => console.log("start to 4000"))