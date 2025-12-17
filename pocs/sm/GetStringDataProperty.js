var GetStringDataProperty = getSelfHostedValue("GetStringDataProperty");

function testProxy() {
    var obj = new Proxy({"foo": "10"}, {});
    var v = GetStringDataProperty(obj, "foo");
    print(v, undefined);
}

function testMaybeUnboxed() {
    
    var obj = JSON.parse("[" + '{"foo": "10"},'.repeat(100) +"{}]");

    
    
    var v = GetStringDataProperty(obj[0], "foo");
    print(v == undefined || v == "10", true);
}

testProxy();
testMaybeUnboxed();
