import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
});
emitter.addListener("hello", (name) => {
    console.info(`coba  ${name}`);
});

emitter.emit("hello", "eko")