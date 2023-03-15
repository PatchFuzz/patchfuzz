

import { ns } from "export-ns.js";

;

print(isProxy(ns), true);
print(ns.a, 1);
assertThrowsInstanceOf(function() { eval("delete ns"); }, SyntaxError);
assertThrowsInstanceOf(function() { ns = null; }, TypeError);
