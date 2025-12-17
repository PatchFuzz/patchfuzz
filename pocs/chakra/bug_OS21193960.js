print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "OS21193960: Proxy [[Construct]] trap confuses super call flag",
        body: function () {
            function test(){
              let ctorCount = 0;
              function ctor() {
                  if (new.target !== undefined) {
                      ctorCount++;
                      this.prop0 = 123;
                      print(proxy === new.target, "proxy === new.target");
                  } else {
                      print('call ctor');
                  }
              }

              let ctor_prototype = ctor.prototype;
              let getCount = 0;
              let proxyHandler = {
                ['get'](handler, prop, target) {
                  getCount++;
                  print(prop !== 'prop0', "prop !== 'prop0'");
                  switch(prop) {
                    case 'prototype':
                      return ctor_prototype;
                  }
                }
              };

              var proxy = new Proxy(ctor, proxyHandler);
              let newProxy = new proxy;

              print(proxy !== newProxy, 'proxy !== newProxy');
              print('object', typeof newProxy, '"object" === typeof newProxy');
              print(1, ctorCount, "1 === ctorCount");

              print(123, newProxy.prop0, "123 === newProxy.prop0");
              print(1, getCount, "1 === getCount");
            };

            test();
            test();
        }
    },
    {
        name: "Proxy target is a base class",
        body: function () {
            function test(){
              let ctorCount = 0;
              class ctor {
                  constructor() {
                  if (new.target !== undefined) {
                      ctorCount++;
                      this.prop0 = 123;
                      print(proxy === new.target, "proxy === new.target");
                  } else {
                      print('call ctor');
                  }
                }
              }

              let ctor_prototype = ctor.prototype;
              let getCount = 0;
              let proxyHandler = {
                ['get'](handler, prop, target) {
                  getCount++;
                  print(prop !== 'prop0', "prop !== 'prop0'");
                  switch(prop) {
                    case 'prototype':
                      return ctor_prototype;
                  }
                }
              };

              var proxy = new Proxy(ctor, proxyHandler);
              let newProxy = new proxy;

              print(proxy !== newProxy, 'proxy !== newProxy');
              print('object', typeof newProxy, '"object" === typeof newProxy');
              print(1, ctorCount, "1 === ctorCount");

              print(123, newProxy.prop0, "123 === newProxy.prop0");
              print(2, getCount, "2 === getCount");
            };

            test();
            test();
        }
    },
    {
        name: "Proxy target is a derived class",
        body: function () {
            function test(){
              let baseCount = 0;
              class base {
                constructor() {
                  if (new.target !== undefined) {
                      baseCount++;
                      print(proxy === new.target, "proxy === new.target");
                  } else {
                      print('call base');
                  }
                }
              };

              let ctorCount = 0;
              class ctor extends base {
                  constructor() {
                  if (new.target !== undefined) {
                      ctorCount++;
                      super();
                      this.prop0 = 123;
                      print(proxy === new.target, "proxy === new.target");
                  } else {
                      print('call ctor');
                  }
                }
              }

              let ctor_prototype = ctor.prototype;
              let getCount = 0;
              let proxyHandler = {
                ['get'](handler, prop, target) {
                  getCount++;
                  print(prop !== 'prop0', "prop !== 'prop0'");
                  switch(prop) {
                    case 'prototype':
                      return ctor_prototype;
                  }
                }
              };

              var proxy = new Proxy(ctor, proxyHandler);
              let newProxy = new proxy;

              print(proxy !== newProxy, 'proxy !== newProxy');
              print('object', typeof newProxy, '"object" === typeof newProxy');
              print(1, ctorCount, "1 === ctorCount");
              print(1, baseCount, "1 === baseCount");

              print(123, newProxy.prop0, "123 === newProxy.prop0");
              print(2, getCount, "2 === getCount");
            };

            test();
            test();
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
