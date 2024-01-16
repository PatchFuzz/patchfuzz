
function g(N, p) {
    var prefix = p.repeat(N);
    var str = prefix + "[AB]";

    try {
        var re = new RegExp(str);
        re.exec(prefix + "A");
    } catch(e) {
        
        
        
        assertEq(e.message.includes("regexp too big") ||
		 e.message.includes("Stack overflow") ||
		 e.message.includes("too much recursion"), true);
    }
}

var prefix = "/(?=k)ok/";
for (var i = 0; i < 18; i++)
    g(Math.pow(2, i), prefix)
