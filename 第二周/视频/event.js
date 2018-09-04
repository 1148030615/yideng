//引入模块 events创建对象EventEmitter
var events = require("events");
var eventmitter = new events.EventEmitter();


//绑定事件处理函数
var connctHander = function(){
    console.log("connected被调用");
}
eventmitter.on('connection',connctHander);

//触发事件
eventmitter.emit('connection');
console.log("执行函数")