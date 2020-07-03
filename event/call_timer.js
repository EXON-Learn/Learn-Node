const timer = require('./timer.module')

timer.timer.on('tick', (time) => {
    let now_time = new Date();
    console.log(now_time)
})