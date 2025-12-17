import { ns } from "export-ns.js";

;

print(isProxy(ns), true);
print(ns.a, 1);
print(function() { eval("delete ns"); }, SyntaxError);
print(function() { ns = null; }, TypeError);
