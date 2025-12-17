gczeal(0);


grayRoot()[0] = (obj) => obj.x;

function foo(obj, skip) {
  if (!skip)
    return grayRoot()[0](obj);
}

with ({}) {}


for (var i = 0; i < 6; i++) {
  foo({x:1}, false);
  foo({y:1, x:2}, false);
}


gczeal(25);
startgc(1);



for (var i = 0; i < 10; i++) {
  foo({x:1}, true);
}


finishgc();
