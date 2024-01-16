













var a = "foo", r;
switch(a) {
    case true ? "foo" : "bar":
        r = "OK";
        break;
}
assert(r === "OK");
