
function randomFloat () {
    
    
    var fac = 1.0;
    var r = Math.random();
    if (r < 0.25)
        fac = 10;
    else if (r < 0.7)
        fac = 10000000;
    else if (r < 0.8)
        fac = NaN;
    return -0.5*fac + Math.random() * fac;
}

for (var i = 0; i < 100000; i++)
    randomFloat();

