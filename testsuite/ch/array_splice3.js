




var echo = WScript.Echo;


var a = [0, 1, 2, 3, 4];
echo("splice no arg:", a, "||", a.splice());


var starts = [-2, 0, 2, 8];
for (var i = 0; i < starts.length; i++) {
    var a = [0, 1, 2, 3, 4];
    var start = starts[i];
    echo("splice at " + start + ":", a, "||", a.splice(start));
}
