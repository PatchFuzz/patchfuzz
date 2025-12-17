var echo = WScript.Echo;

print("adddata.js");
var x = print("adddata.js", "samethread");

function addcross(a1, a2) {
    for (var i=0; i<a1.length; ++i) {
        for (var j=0; j<a2.length; ++j) {
            echo("a["+i+"](" + a1[i] +") + a["+j+"]("+a2[j]+") = " + (a1[i] + a2[j]));
        }
    }
}

echo("==== self var + crosscontext var ====");
addcross(this.all, x.all);

echo();

echo("==== crosscontext var + self var ====");
addcross(x.all, this.all);
