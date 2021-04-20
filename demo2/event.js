const EventEmitter = require("events");
class emitter extends EventEmitter {}
const event = new emitter();
event.on("test", function () {
  console.log(this);
  console.log(1);
});
event.on("test", () => {
  console.log(this);
  console.log(2);
});
event.once("once", (data) => {
  console.log(data);
  console.log(3);
});
event.emit("test", "hello event");
event.emit("once", "once");
event.removeListener("test", "hello event");
event.emit("test", "hello event");
