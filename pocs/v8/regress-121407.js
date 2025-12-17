var a = [0,1,2,3];
a[2000000] = 2000000;
a.length=2000;
for (var i = 0; i <= 256; i++) {
    a[i] = new Object();
}

a = [0.5,1.5,2.5,3.5,4.5,5.5];
a[2000000] = 2000000;
a.length=2000;
for (var i = 0; i <= 256; i++) {
    a[i] = new Object();
}
