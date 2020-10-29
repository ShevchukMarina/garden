let express = require('express')
let app = express()

app.get('/', function (req, res) {
  res.render('./index')
})

// use port 3000 unless there exists a preconfigured port
let port = process.env.port || 3000

app.listen(port)
