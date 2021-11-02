const EventEmmitter = require('events').EventEmitter;
var emitter = new EventEmmitter();
var count = 0;
setInterval(() => {
    emitter.emit('sekunda', count);
    count++;
}, 1000);
emitter.on('sekunda', (count) => {
    console.log('sekunda', count);
});