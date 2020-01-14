const app = require('./app') // the actual Express app
const http = require('http')
const config = require('./utils/config')
const PORT = config.PORT || 3001

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${PORT}`)
})