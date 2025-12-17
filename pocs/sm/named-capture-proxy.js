var access_log = "";
const handler = {
    get: function(obj, prop) {
        access_log += prop + ",";
        return prop in obj ? obj[prop] : "<filled by proxy>";
    }
};

class ProxiedGroupRegExp extends RegExp {
    exec(s) {
        var result = super.exec(s);
        if (result) {
            result.groups = new Proxy(result.groups, handler);
        }
        return result;
    }
}

let re = new ProxiedGroupRegExp("(?<x>.)");
print("a".replace(re, "$<x> $<y>"), "a <filled by proxy>");
print(access_log, "x,y,")
