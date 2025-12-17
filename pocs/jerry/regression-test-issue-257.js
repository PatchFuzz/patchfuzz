var r;
r = new RegExp("]");
assert (r.exec("]") == "]");

r = new RegExp("}");
assert (r.exec("}") == "}");
