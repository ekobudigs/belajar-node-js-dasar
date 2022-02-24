function samplePromise(){
    return Promise.resolve("eko");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();