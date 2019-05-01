const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4());

// Loggewr class:
class Logger extends EventEmitter {
    // Log method:
    log(msg) {
        this.emit("message", { id: uuid.v4(), msg });
    }
}

module.exports = Logger;