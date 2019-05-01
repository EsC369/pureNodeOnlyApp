const EventEmitter = require("events");

// Create Class:
class MyEmitter extends EventEmitter {};

// Init object:
const myEmitter = new MyEmitter();

// Event Listener:
myEmitter.once("event", () => console.log("Event Fired!"));

// Init event:
myEmitter.emit("event");


// CONTINUED/ASSOCIATED IN LOGGER.JS