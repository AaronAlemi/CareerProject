const app = require('./app')
const {PORT} = require("./config")
const cors = require('cors');

app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://localhost:${PORT}`)
})
