const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { log } = console;

const CHANNEL = `EMIT_BACK`;

server.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    log("client connected");

    socket.on(CHANNEL, () => {
        socket.emit(CHANNEL)
    });
});