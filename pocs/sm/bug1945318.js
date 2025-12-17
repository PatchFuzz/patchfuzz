function not_called() {

}

let obj = {};
function* a() {
    yield {}; 
    Error.captureStackTrace(obj, not_called);
}

async function b() {
    let g = a();
    await g.next();
    await g.next();
}

b().then(() => {
    print('stack' in obj, true);
    print(obj.stack, "");
})
