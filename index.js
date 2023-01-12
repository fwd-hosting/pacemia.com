const server = require('@fwd/server')

server.start(process.argv[2] || 80, __dirname)
