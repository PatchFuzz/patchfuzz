async function asyncFunc1(a) {
    return a * a;
}

asyncFunc1(10).then(
    result => print(result),
    error => print(error) 
);

var asyncFunc2 = async function(a) {
    return a * a;
}

asyncFunc2(10).then(
    result => print(result),
    error => print(error) 
);

var asyncFunc3 = async (a) => { return a * a; }

asyncFunc3(10).then(
    result => print(result),
    error => print(error) 
);

var asyncFunc4 = async a => a * a;

asyncFunc4(10).then(
    result => print(result),
    error => print(error) 
);