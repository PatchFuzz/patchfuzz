var e = print("cross_site_accessor_child.js", "samethread");

var child_obj = e.obj;

child_obj.x = function foo1() {
    return "pass";
}

child_obj.y = function foo2(data) {
    print(data);
}

print(child_obj.xval);
child_obj.xval = "pass"