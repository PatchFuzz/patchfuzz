


var l=[
-88,
-37,
-12,
-5,
9,
-7,
41,
-9,
43,
-11,
34,
38,
-22,
-17,
-16,
-34,
-33,
62,
63,
-36,
50,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
-128
];
var bits = [1,
1,
1,
1,
1,
1,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
];
var t = 0;
var c = 3407;
var i;

while (c--) {
    i = 0;
    while (l[i] < 0) {
        if (bits[t]) {
            i = - l[i];
        } else {
            ++i;
        }
        ++t;
    }
}
