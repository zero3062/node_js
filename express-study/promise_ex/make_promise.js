const wait1seconds = new Promise(( resolve, reject ) => {
    var a = 0;
    if(a) {
        resolve("success");
    } else {
        reject("failed");
    }
});

wait1seconds.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})