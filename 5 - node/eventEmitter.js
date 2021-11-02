const EventEmmitter = require('events').EventEmitter;
var emitter = new EventEmmitter();
var count = 0;

emitter.on('sekunda', (count) => {
    console.log('Sekunda', count);
});

emitter.once('sekunda', (count) => {
    console.log('Sekunda2', count);
});

setInterval(() => {
    emitter.emit('sekunda', count);
    count++;
}, 1000);


