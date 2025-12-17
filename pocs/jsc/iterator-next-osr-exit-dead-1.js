let obj = [];

for (let i = 0; i < 10; i++) {
    let [a] = obj;
    obj.length = 1;
    for (let j = 0; j < testLoopCount; j++) { }
}
