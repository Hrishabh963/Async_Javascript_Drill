const fsUsingCallback = require('../problem1UsingCallback').fsUsingCallBack;


const data = JSON.stringify({ Name: 'Hrishabh' });

//Using callback only

fsUsingCallback.callBackCreate(data, (error) => {
    if (error) {
        console.log(`Error encountered: ${error}`);
        return;
    } else {
        fsUsingCallback.callBackDelete((error) => {
            if (error) {
                console.log(`Error encountered: ${error}`);
                return;
            } else {
                console.log(`All files Deleted using callbacks`);
            }
        });
    }
});