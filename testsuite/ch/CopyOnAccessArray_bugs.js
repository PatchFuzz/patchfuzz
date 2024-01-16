






if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Calling Array.prototype.slice()",
        body: function ()
        {
            var a=[1,2,3,4,5];
            var b=Array.prototype.slice.call(a,1,3);
            assert.areEqual([2,3], b, "Incorrect result from Array.prototype.slice()");
        }
    },
    {
        name: "Calling Array.prototype.push()",
        body: function ()
        {
            var a=[1,2];
            Array.prototype.push.call(a,1);
            assert.areEqual([1,2,1], a, "Incorrect result from Array.prototype.push()");
            
            Array.prototype.push.call([0, 0, 0, 0, 0]);
        }
    },
    {
        name: "Calling Array.isArray()",
        body: function ()
        {
            var a=[1,2,3,4,5,6,7];
            assert.areEqual(true, Array.isArray(a), "Incorrect result from Array.isArray()");
        }
    },
    {
        name: "Calling Array.prototype.unshift()",
        body: function ()
        {
            var a=[2,1,3,4];
            Array.prototype.unshift.call(a,0);
            assert.areEqual([0,2,1,3,4], a, "Incorrect result from Array.prototype.unshift()");
        }
    },
    {
        name: "Calling Array.prototype.shift()",
        body: function ()
        {
            var a=[1,2,3,4];
            var c=Array.prototype.shift.call(a);
            assert.areEqual([2,3,4], a, "Incorrect result from Array.prototype.shift()");
            assert.areEqual(1, c, "Incorrect result from Array.prototype.shift()");
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
            assert.areEqual([4,3,2,1], a, "Incorrect result from Array.prototype.reverse()");
        }
    },
    {
        name: "Calling Object.prototype.toString()",
        body: function ()
        {
            var a=[1,2,3,4,5,6];
            var c=Object.prototype.toString.call(a);
            assert.areEqual("[object Array]", c, "Incorrect result from Object.prototype.toString()");
        }
    },
    {
        name: "Calling Object.prototype.hasOwnProperty()",
        body: function ()
        {
            var a=[1,2,3,4,5,6];
            var c=Object.prototype.hasOwnProperty.call(a, 1);
            assert.areEqual(c, true);
        }
    },
    {
        name: "OS3713376: Accessing COA through proxy",
        body: function ()
        {
            var p = new Proxy([0,0,0,0,0], {});
            p.length = 1;
            assert.areEqual('0', p.toString(), 'Setting length of an array through Proxy');

            var q = new Proxy([0,0,0,0,0], {});
            q[0] = 1;
            assert.areEqual('1,0,0,0,0', q.toString(), 'Setting array element through Proxy');
        }
    },
    {
        name: "Reflect.set",
        body: function ()
        {
            assert.isTrue(Reflect.set([1950, 1960, 1970, 1980, 1990], "0", 1), "Should be able to set property on int array");
            assert.isTrue(Reflect.set([1950, 1960.1, 1970, 1980, 1990], "0", 1), "Should be able to set property on float array");
        }
    },
    {
        name: "Reflect.defineProperty",
        body: function ()
        {
            var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            Reflect.defineProperty(b, "length", {value: 0});
            assert.areEqual(b.length, 0, "Setting length property to 0");
        }
    },
    {
        name: "Reflect.set",
        body: function ()
        {
            assert.isTrue(Reflect.set([1950, 1960, 1970, 1980, 1990], "0", 1), "Should be able to set property on int array");
            assert.isTrue(Reflect.set([1950, 1960.1, 1970, 1980, 1990], "0", 1), "Should be able to set property on float array");
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
            assert.areEqual(a, [], "Array.of.call with custom constructor");
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
            assert.isTrue(getPropCalled, "for-in enumerator should call getProp from prototype");
            assert.areEqual(x1,'10', "enumerator should complete");
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
            assert.isTrue(getPropCalled, "for-in enumerator should call getProp from prototype");
            assert.areEqual(x1,'10', "enumerator should complete");
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
            assert.areEqual(x1, 12, "enumerator should complete");
        }
    },
];
testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
