const fsUsingAsyncAwait = require('../problem1UsingAsyncAwait').fsUsingAsyncAwait;
const data = JSON.stringify({ Name: "Hrishabh" })
    //Using Async/Await

async function createDeleteUsingAsyncAwait() {
    try {
        await fsUsingAsyncAwait.asyncMakeDir('test1_files');
        await fsUsingAsyncAwait.asyncAwaitCreate('file1.json', data);
        await fsUsingAsyncAwait.asyncAwaitCreate('file2.json', data);
        await fsUsingAsyncAwait.asyncAwaitCreate('file3.json', data);
        console.log(`All files created using async/await`);
        await fsUsingAsyncAwait.asyncAwaitDelete('file1.json');
        await fsUsingAsyncAwait.asyncAwaitDelete('file2.json');
        await fsUsingAsyncAwait.asyncAwaitDelete('file3.json');
        console.log(`All files deleted using async/await`);
        await fsUsingAsyncAwait.asyncRemoveDir('test1_files');
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

createDeleteUsingAsyncAwait();