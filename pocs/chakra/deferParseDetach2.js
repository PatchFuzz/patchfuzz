var g_n = 0;

function test() {
    var f = new Function("return " + g_n++);
    f();
    
}

print(test);
print(test);

print("pass");