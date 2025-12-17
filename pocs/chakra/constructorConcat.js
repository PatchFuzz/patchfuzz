function f(arg) {
    var i = 0;
    while (i < 5) {
        i++;
        arg += "this_should_not_stay";
    }
}
f("Hello");
f(Int8Array);

if (!Int8Array.toString().includes("this_should_not_stay")) {
    print("Passed");
}
else {
    print("FAILED");
}
