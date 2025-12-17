if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Calling Array.prototype.slice()",
        body: function ()
        {
            var a=[1,2,3,4,5];
            var b=Array.prototype.slice.call(a,1,3);
            print([2,3], b, "Incorrect result from Array.prototype.slice()");
        }
    },
    {
        name: "Calling Array.prototype.push()",
        body: function ()
        {
            var a=[1,2];
            Array.prototype.push.call(a,1);
            print([1,2,1], a, "Incorrect result from Array.prototype.push()");
            
            Array.prototype.push.call([0, 0, 0, 0, 0]);
        }
    },
    {
        name: "Calling Array.isArray()",
        body: function ()
        {
            var a=[1,2,3,4,5,6,7];
            print(true, Array.isArray(a), "Incorrect result from Array.isArray()");
        }
    },
    {
        name: "Calling Array.prototype.unshift()",
        body: function ()
        {
            var a=[2,1,3,4];
            Array.prototype.unshift.call(a,0);
            print([0,2,1,3,4], a, "Incorrect result from Array.prototype.unshift()");
        }
    },
    {
        name: "Calling Array.prototype.shift()",
        body: function ()
        {
            var a=[1,2,3,4];
            var c=Array.prototype.shift.call(a);
            print([2,3,4], a, "Incorrect result from Array.prototype.shift()");
            print(1, c, "Incorrect result from Array.prototype.shift()");
        }
    },
    {
        name: "Calling Array.prototype.entries()",
        body: function ()
        {
            var a=[1,2,3,4];
            var c=Array.prototype.entries.call(a);
            for (var e of c)
            {
                print(e);
            }
        }
    },
    {
        name: "Calling Array.prototype.keys()",
        body: function ()
        {
            var a=[1,2,3,4];
            var c=Array.prototype.keys.call(a);
            for (var e of c)
            {
                print(e);
            }
        }
    },
    {
        name: "Calling Array.prototype.reverse()",
        body: function ()
        {
            var a=[1,2,3,4];
            Array.prototype.reverse.call(a);
            print([4,3,2,1], a, "Incorrect result from Array.prototype.reverse()");
        }
    },
    {
        name: "Calling Object.prototype.toString()",
        body: function ()
        {
            var a=[1,2,3,4,5,6];
            var c=Object.prototype.toString.call(a);
            print("[object Array]", c, "Incorrect result from Object.prototype.toString()");
        }
    },
    {
        name: "Calling Object.prototype.hasOwnProperty()",
        body: function ()
        {
            var a=[1,2,3,4,5,6];
            var c=Object.prototype.hasOwnProperty.call(a, 1);
            print(c, true);
        }
    },
    {
        name: "OS3713376: Accessing COA through proxy",
        body: function ()
        {
            var p = new Proxy([0,0,0,0,0], {});
            p.length = 1;
            print('0', p.toString(), 'Setting length of an array through Proxy');

            var q = new Proxy([0,0,0,0,0], {});
            q[0] = 1;
            print('1,0,0,0,0', q.toString(), 'Setting array element through Proxy');
        }
    },
    {
        name: "Reflect.set",
        body: function ()
        {
            print(Reflect.set([1950, 1960, 1970, 1980, 1990], "0", 1), "Should be able to set property on int array");
            print(Reflect.set([1950, 1960.1, 1970, 1980, 1990], "0", 1), "Should be able to set property on float array");
        }
    },
    {
        name: "Reflect.defineProperty",
        body: function ()
        {
            var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            Reflect.defineProperty(b, "length", {value: 0});
            print(b.length, 0, "Setting length property to 0");
        }
    },
    {
        name: "Reflect.set",
        body: function ()
        {
            print(Reflect.set([1950, 1960, 1970, 1980, 1990], "0", 1), "Should be able to set property on int array");
            print(Reflect.set([1950, 1960.1, 1970, 1980, 1990], "0", 1), "Should be able to set property on float array");
        }
    },
    {
        name: "Array.of",
        body: function ()
        {
            var target = [1,2,3,4,5];
            function constructor()
            {
                return target;
            }
            var a = Array.of.call(constructor);
            print(a, [], "Array.of.call with custom constructor");
        }
    },
    {
        name: "CopyOnAccess in ForInEnumerator - native ints",
        body: function ()
        {
            eval("[1,1,1,1,1,1];".repeat(0x4));
            x=[1,3,3,4,5,6,7];
            var getPropCalled = false;
            var handler = {
                getPrototypeOf: function(target, name){
                    getPropCalled = true;
                    return x;
                }
            };
            var s= [1,5,3,4,5,6,8,9,10,11,12];
            p = new Proxy(s, handler);
            for(var x1 in p) { };
            print(getPropCalled, "for-in enumerator should call getProp from prototype");
            print(x1,'10', "enumerator should complete");
        }
    },
    {
        name: "CopyOnAccess in ForInEnumerator - native floats",
        body: function ()
        {
            eval("[1,1,1,1,1,1];".repeat(0x4));
            x=[1.1,3.1,3.1,4.1,5.1,6.1,7.1];
            var getPropCalled = false;
            var handler = {
                getPrototypeOf: function(target, name){
                    getPropCalled = true;
                    return x;
                }
            };
            var s= [1.1,5.1,3.1,4.1,5.1,6.1,8.1,9.1,10.1,11.1,12.1];
            p = new Proxy(s, handler);
            for(var x1 in p) { };
            print(getPropCalled, "for-in enumerator should call getProp from prototype");
            print(x1,'10', "enumerator should complete");
        }
    },
    {
        name: "CopyOnAccess in for..of - native ints",
        body: function ()
        {
            eval("[1,1,1,1,1,1];".repeat(0x4));
            x=[1,3,3,4,5,6,7];
            var handler = {
                getPrototypeOf: function(target, name){
                    return x;
                }
            };
            var s= [1,5,3,4,5,6,8,9,10,11,12];
            p = new Proxy(s, handler);
            for(var x1 of p) { };
            print(x1, 12, "enumerator should complete");
        }
    },
];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
