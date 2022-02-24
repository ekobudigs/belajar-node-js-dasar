function samplePromise(){
    return Promise.resolve("budi");
}

const name = await samplePromise();
console.info(name);