var o1 = {p1: 1};
var o2 = {p1: 1, p2: 2};

for(var x in o1) {
    for(var y in o2) {
        delete o2.p2;
    }
}



