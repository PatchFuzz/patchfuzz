
evaluate(`
const src = \`
    [function f() {
        const v = eval("[]");
        v[0] = function() {};
        newGlobal({sameZoneAs: this}).findPath(v, src);
    }]
\`;
var arr = eval(src);
arr[0]();
`, {envChainObject: {}});
