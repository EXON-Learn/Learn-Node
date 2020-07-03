// event 내장 모듈 불러오기
var EventEmitter = require('events')

// event 이벤트 모듈을 사용하기 위해 초기화
const custom_object = new EventEmitter()

// on() 함수 재정의하여 'call' 이벤트를 처리
custom_object.on('call', () => {
    console.log('custom object : ON')
})

// call 이벤트를 강제로 발생시킴
custom_object.emit('call')