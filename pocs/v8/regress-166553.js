JSON.stringify(String.fromCharCode(1, -11).toString())
gc();
var s = String.fromCharCode(1, -11)
print(65525, s.charCodeAt(1))
