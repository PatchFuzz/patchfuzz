



var error;
let str = '';
let arr = [{}, 2, 3];
try {
    for (let z = 0; z < 30; z++)
        str = arr.join(str); 
} catch(e) {
    error = e;
}

if (!error)
    throw Error("Failed");
