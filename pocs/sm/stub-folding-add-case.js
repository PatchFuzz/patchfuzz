var sum = 0;
function foo(o) {
    sum += o.a;
}

with({}) {}


for (var i = 0; i < 11; i++) {
    foo({a:1});
    foo({a:1,b:2});
}


foo({a:1,b:2,c:3});


for (var i = 0; i < 16; i++) {
    foo({a:1});
}


foo({a:1,b:2,c:3,d:4});


for (var i = 0; i < 20; i++) {
    foo({a:1});
    foo({a:1,b:2});
    foo({a:1,b:2,c:3});
    foo({a:1,b:2,c:3,d:4});
}

print(sum, 120);
