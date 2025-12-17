var requestGlobal = print("TypePropertyCache_CrossContext_RequestContext.js", "samethread");


var o = [
    { p: "000" },
    { p: "001", q: 0 },
    { p: "002" },
    { p: "003", q: 0 }
];
for(var i = 0; i < o.length; ++i)
    print(requestGlobal.access(o[i]));


var proto = o;
o = [];
for(var i = 0; i < proto.length; ++i)
    o.push(Object.create(proto[i]));
for(var i = 0; i < o.length; ++i)
    o[i].p;
for(var i = 0; i < o.length; ++i)
    print(requestGlobal.access(o[i]));
