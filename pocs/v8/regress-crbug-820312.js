let arr = new Array(0x10000);
let resolve_element_closures = new Array(0x10000);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Promise(() => {});
    arr[i].then = ((idx, resolve) => {
        resolve_element_closures[idx] = resolve;
    }).bind(null, i);
}

Promise.all(arr);


resolve_element_closures[0xffff]();


resolve_element_closures[100]();


resolve_element_closures[0xfffe]();
