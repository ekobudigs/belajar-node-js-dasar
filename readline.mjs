import readline  from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa Nama Anda ? ", (name) => {
    console.info(`Hallo ${name}`);
    input.close(); 
});