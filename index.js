const express = require('express')
const commentRouter = require('./router')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', commentRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))