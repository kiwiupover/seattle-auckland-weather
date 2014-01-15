var express = require('express')
  , server = express()
  , path = require('path')
  , port = process.env.PORT || 5000
  , serverBase = path.resolve(__dirname, '../dist')

server.set('serverBase', serverBase)

server
  .use(express.logger())
  .use(express.bodyParser())
  .use(express.methodOverride())
  .get('/dist/index.html', function (req, res) { res.redirect('/') })
  .use('/', express.static(serverBase))

require('../api/routes')(server)

server.listen(port, function() {
  console.log("Connect server listenting on port " + port)
})