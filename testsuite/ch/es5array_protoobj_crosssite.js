





var crossSiteGlo = WScript.LoadScriptFile("es5array_crosssite.js", "samethread");

var obj = {};
Object.defineProperty(obj, "1", { value: "const", writable: false });

crossSiteGlo.test_obj_proto(obj);

