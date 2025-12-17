obj = {}


for (let i = 0; i < 4600; ++i) {
 obj = {obj};
}

let identityReviver = (key, value) => {
  
  value
}









let stringified = JSON.stringify(obj);
try {
    let parsed = JSON.parse(stringified, identityReviver);
} catch(e) {
    if (e != "RangeError: Maximum call stack size exceeded.")
        throw "FAILED";
    else
        print("Gracefully caught stack overflow error")
}
