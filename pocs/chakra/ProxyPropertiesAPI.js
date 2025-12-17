print("..\\UnitTestFramework\\UnitTestFramework.js");

let tests = [
   {
       name: "GetProxyProperties: no argugments",
       body: function () {
           let properties = print();
           print(properties, "ProxyProperties of nothing should be undefined.");
        }
   },
   {
        name: "GetProxyProperties: non-proxy arguments",
        body: function () {
            let properties = print(undefined);
            print(properties, "ProxyProperties of undefined should be undefined.");
            properties = print(1);
            print(properties, "ProxyProperties of number should be undefined.");
            properties = print({});
            print(properties, "ProxyProperties of non-proxy object should be undefined.");
        }
    },
    {
        name: "GetProxyProperties: revocable Proxy",
        body: function () {
            let revocable = Proxy.revocable({someProperty: true, otherProperty: false}, {otherProperty: true, newProperty: 5});
            let proxy = revocable.proxy;
            let properties = print(proxy);

            let names = Object.getOwnPropertyNames(properties);
            print(names.length, 3, "proxy properties names should have length 3.");
            print(names.includes("target"));
            print(names.includes("handler"));
            print(names.includes("revoked"));
            print(properties.revoked, "Revoked bool should be false.");

            names = Object.getOwnPropertyNames(properties.target);
            print(names.length, 2, "proxy properties target names should have length 2.");
            print(properties.target.someProperty, true);
            print(properties.target.otherProperty, false);
            
            names = Object.getOwnPropertyNames(properties.handler);
            print(names.length, 2, "proxy properties handler names should have length 2.");
            print(properties.handler.newProperty, 5);
            print(properties.handler.otherProperty, true);

            revocable.revoke();
            properties = print(proxy);

            names = Object.getOwnPropertyNames(properties);
            print(names.length, 3, "proxy properties names for revokes proxy should have length 3.");
            print(names.includes("target"));
            print(names.includes("handler"));
            print(properties.revoked, "Revoked bool should be true.");

            print(properties.target, "Target of revoked proxy should be undefined.");
            print(properties.handler, "Handler of revoked proxy should be undefined.");
        }
    },
    {
        name: "GetProxyProperties: normal Proxy",
        body: function () {
            let proxy = new Proxy({someProperty: true, otherProperty: false}, {otherProperty: true, newProperty: 5});
            let properties = print(proxy);

            let names = Object.getOwnPropertyNames(properties);
            print(names.length, 3, "proxy properties names should have length 3");
            print(names.includes("target"));
            print(names.includes("handler"));
            print(names.includes("revoked"));
            print(properties.revoked, "Revoked bool should be false.");

            names = Object.getOwnPropertyNames(properties.target);
            print(names.length, 2, "proxy properties target names should have length 2");
            print(properties.target.someProperty, true);
            print(properties.target.otherProperty, false);
            
            names = Object.getOwnPropertyNames(properties.handler);
            print(names.length, 2, "proxy properties handler names should have length 2");
            print(properties.handler.newProperty, 5);
            print(properties.handler.otherProperty, true);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}