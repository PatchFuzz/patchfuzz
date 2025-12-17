print("..\\UnitTestFramework\\UnitTestFramework.js");

function AddNumbers(first, second)
{
    return first + second;
}

var tests = [
    {
       name: "Number Object Test",
       body: function ()
       {
            var a = new Number(1);
            a[Symbol.toPrimitive] = function(hint)
            {
                if(hint == "string")
                {
                    return "a";
                }
                else
                {
                    return 10;
                }
            }

            print(10 == a,"should now call @@toprimitive and return 10");
            print(11 == a+1,"should now call @@toprimitive with default hint and return 10 then add 1 = 11");
            print("a",String(a),"should now call @@toPrimitive and return a");
        }
    },
    {
        name: "Symbol Tests",
        body: function ()
        {

            var o  = Object.getOwnPropertyDescriptor(Symbol,"toPrimitive");
            print(o.writable,     "Symbol @@toPrimitive is not writable");
            print(o.enumerable,   "Symbol @@toPrimitive is not enumerable");
            print(o.configurable, "Symbol @@toPrimitive is not configurable");


            print("[Symbol.toPrimitive]", Symbol.prototype[Symbol.toPrimitive].name, "string should be [Symbol.toPrimitive]");
            var o  = Object.getOwnPropertyDescriptor(Symbol.prototype,Symbol.toPrimitive);
            print(o.writable,     "Symbol @@toPrimitive is not writable");
            print(o.enumerable,   "Symbol @@toPrimitive is not enumerable");
            print(o.configurable,  "Symbol @@toPrimitive is configurable");
            print(function() { Symbol.prototype[Symbol.toPrimitive](); }, TypeError, "Symbol[@@toPrimitive] throws no matter the parameters", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");

            var s = Symbol();
            print(s, Object(s)[Symbol.toPrimitive](), ""); 
            print(s, Symbol.prototype[Symbol.toPrimitive].call(s), ""); 

            var symbolObject = Object(s);
            Object.defineProperty(symbolObject, Symbol.toPrimitive, {
                value: function() { return 42; },
                configurable: true,
            });
            print(+symbolObject, 42, "User-defined @@toPrimitive is called on symbol objects");
            Object.defineProperty(symbolObject, Symbol.toPrimitive, { value: undefined });
            Object.defineProperty(symbolObject, 'valueOf', {
                value: function() { return 43; },
                configurable: true,
            });
            print(+symbolObject, 43, "OrdinaryToPrimitive is called if @@toPrimitive is undefined");

            print(Symbol.toPrimitive, Symbol.toPrimitive[Symbol.toPrimitive](), "Symbol.toPrimitive");
            print(Symbol.iterator, Symbol.iterator[Symbol.toPrimitive](), "Symbol.iterator");
            print(Symbol.hasInstance, Symbol.hasInstance[Symbol.toPrimitive](), "Symbol.hasInstance");
            print(Symbol.isConcatSpreadable, Symbol.isConcatSpreadable[Symbol.toPrimitive](), "Symbol.isConcatSpreadable");
            print(Symbol.match, Symbol.match[Symbol.toPrimitive](), "Symbol.match");
            print(Symbol.replace, Symbol.replace[Symbol.toPrimitive](), "Symbol.replace");
            print(Symbol.search, Symbol.search[Symbol.toPrimitive](), "Symbol.search");
            print(Symbol.split, Symbol.split[Symbol.toPrimitive](), "Symbol.split");
            print(Symbol.toStringTag, Symbol.toStringTag[Symbol.toPrimitive](), "Symbol.toStringTag");
            print(Symbol.unscopables, Symbol.unscopables[Symbol.toPrimitive](), "Symbol.unscopables");
        }
    },
    {
       name: "Date Test",
       body: function ()
       {
            print("[Symbol.toPrimitive]", Date.prototype[Symbol.toPrimitive].name, "string should be [Symbol.toPrimitive]");
            var o  = Object.getOwnPropertyDescriptor(Date.prototype,Symbol.toPrimitive);
            print(o.writable,     "Date @@toPrimitive is not writable");
            print(o.enumerable,   "Date @@toPrimitive is not enumerable");
            print(o.configurable,  "Date @@toPrimitive is configurable");

            var d = new Date(2014,5,30,8, 30,45,2);
            print(d.toString(),d[Symbol.toPrimitive]("string"), "check that the string hint toPrimitive returns toString");
            print(d.toString(),d[Symbol.toPrimitive]("default"), "check that default has the same behaviour as string hint");
            print(d.valueOf(),d[Symbol.toPrimitive]("number"),"check that the number hint toPrimitive returns valueOf");

            print(function() {d[Symbol.toPrimitive]("boolean")}, TypeError, "boolean is an invalid hint");
            print(function() {d[Symbol.toPrimitive]({})}, TypeError, "provided hint must be strings or they results in a type error");

            print(d.toString()+10,d+10,"addition provides no hint resulting default hint which is string");
            print(d.valueOf(), (new Number(d)).valueOf(),"conversion toNumber calls toPrimitive with hint number");

            delete Date.prototype[Symbol.toPrimitive];
            print(Date.prototype.hasOwnProperty(Symbol.toPrimitive),"Property is configurable, should be able to delete");
            print(d.toString()+10,d+10,"(fall back to OriginalToPrimitive) addition provides no hint resulting default hint which is string");
            print(d.valueOf(), (new Number(d)).valueOf(),"(fall back to OriginalToPrimitive) conversion toNumber calls toPrimitive with hint number");
            Object.defineProperty(Date.prototype, Symbol.toPrimitive, o); 

            print(()=>(Date.prototype[Symbol.toPrimitive].call(undefined, "default")), TypeError, "this=undefined", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(null, "default")), TypeError, "this=null", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(true, "default")), TypeError, "this=true", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(false, "default")), TypeError, "this=false", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(0, "default")), TypeError, "this=0", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(NaN, "default")), TypeError, "this=NaN", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call('', "default")), TypeError, "this=''", "Date[Symbol.toPrimitive]: 'this' is not an Object");
            print(()=>(Date.prototype[Symbol.toPrimitive].call('abc', "default")), TypeError, "this='abc'", "Date[Symbol.toPrimitive]: 'this' is not an Object");

            print(()=>(Date.prototype[Symbol.toPrimitive].call()), TypeError, "this=undefined no hint", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(undefined)), TypeError, "this=undefined hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(null)), TypeError, "this=null hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(true)), TypeError, "this=true hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(false)), TypeError, "this=false hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(0)), TypeError, "this=0 hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(NaN)), TypeError, "this=NaN hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call('')), TypeError, "this='' hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call('abc')), TypeError, "this='abc' hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(Date.prototype[Symbol.toPrimitive].call(function(){})), TypeError, "this=function(){} hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");

            print(()=>(d[Symbol.toPrimitive]()), TypeError, "no hint", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](undefined)), TypeError, "hint=undefined", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](null)), TypeError, "hint=null", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](true)), TypeError, "hint=true", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](false)), TypeError, "hint=false", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](0)), TypeError, "hint=0", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](NaN)), TypeError, "hint=NaN", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive]('')), TypeError, "hint=''", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive]('abc')), TypeError, "hint='abc'", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive](function(){})), TypeError, "hint=function(){}", "Date[Symbol.toPrimitive]: invalid hint");
            print(()=>(d[Symbol.toPrimitive]({})), TypeError, "hint=={}", "Date[Symbol.toPrimitive]: invalid hint");
       }
    },
    {
       name: "Object toPrimitive Test",
       body: function ()
       {
            var o = { toString : function () {return "o"}, valueOf : function() { return 0;}};

            o[Symbol.toPrimitive] = function(hint)
            {
                if("string" == hint)
                {
                    return this.toString()+" (hint String)";
                }
                else if("number" == hint)
                {
                    return this.valueOf()+2;
                }
                else
                {
                    return " (hint default) ";
                }
            }
            print(" (hint default) ", o[Symbol.toPrimitive](), "Test to check the string is properly being returned");
            print("o (hint String)",  o[Symbol.toPrimitive]("string"), "Test to check the string is properly being returned");
            print(2, o[Symbol.toPrimitive]("number"), "Test to check the integer is properly being returned");


           print(2,(new Number(o)).valueOf(),"toNumber should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint number"); 
           print("1 (hint default) 1",1+o+1,"add should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with no hint"); 
           print("o (hint String)",(new String(o)).toString(),"toString should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint string"); 
       }
    },
    {
       name: "Object toPrimitive must be Function or null else Throws typeError",
       body: function ()
       {
            var o = { toString : function () {return "o"}, valueOf : function() { return 0;}};

            o[Symbol.toPrimitive]  = {}; 
            print(function() {var a = o+1;}, TypeError, "o[Symbol.toPrimitive] must be a function", "The value of the property 'Symbol.toPrimitive' is not a Function object");

            o[Symbol.toPrimitive] = null;
            print(function() {var a = o+1;}, "If o[Symbol.toPrimitive] is null it is ignored");
        }
    },
















    {
       name: "String Object Test",
       body: function ()
       {
            var a = new String("a");
            a[Symbol.toPrimitive] = function(hint)
            {
                if(hint == "string")
                {
                    return "var_a";
                }
                else
                {
                    return -1;
                }
            }
            print(-1 == a,"should now call @@toprimitive and return -1");
            print("var_a" == String(a),"should now call @@toprimitive and return var_a");
            print(0 == a+1,"should now call @@toprimitive and return -1+1 = 0");

            print("var_a1" == String(a)+1,"should now call @@toprimitive and return var_a1");
            print(-1,Number(a),"should now call @@toPrimitive and return a");
        }
    },
    {
        name: "ToPrimitive calling user-defined [@@toPrimitive] method",
        body: function ()
        {
            var o = {}, o1 = {}, o2 = {};

            var retVal, hint;

            o[Symbol.toPrimitive] = function(h) { hint.push(h); return retVal; }
            o1[Symbol.toPrimitive] = function(h) { hint.push("o1:"+h); return retVal; }
            o2[Symbol.toPrimitive] = function(h) { hint.push("o2:"+h); return retVal; }

            
            Object.defineProperty(o, "toString", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected toString() call on o"); } });
            Object.defineProperty(o1, "toString", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected toString() call on o1"); } });
            Object.defineProperty(o2, "toString", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected toString() call on o2"); } });
            Object.defineProperty(o, "valueOf", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected valueOf() call on o"); } });
            Object.defineProperty(o1, "valueOf", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected valueOf() call on o1"); } });
            Object.defineProperty(o2, "valueOf", { writable:true, configurable:true, enumerable:true, value: function() {  throw Error("Unexpected valueOf() call on o2"); } });

            var verifyToPrimitive = function(func, expectedResult, expectedHint, description) {
                hint = [];
                print(expectedResult, func(), "result:" + description);
                print(expectedHint, hint, "hint:" + description);
            }

            
            
            

            retVal = NaN;
            verifyToPrimitive(()=>Number(o), NaN, ["number"], "Number()");
            verifyToPrimitive(()=>new Uint8Array([o]), new Uint8Array([NaN]), ["number"], "TypedArray constructor");
            verifyToPrimitive(()=>isFinite(o), false, ["number"], "isFinite()");
            verifyToPrimitive(()=>isNaN(o), true, ["number"], "isNaN()");

            retVal = 100;
            verifyToPrimitive(()=>(1-o), -99, ["number"], "1-o");
            verifyToPrimitive(()=>(o-2), 98, ["number"], "o-2");
            verifyToPrimitive(()=>(1*o), 100, ["number"], "1*o");
            verifyToPrimitive(()=>(o*2), 200, ["number"], "o*2");
            verifyToPrimitive(()=>Math.log10(o), 2, ["number"], "Math.log10()");
            verifyToPrimitive(()=>(o1-o2), 0, ["o1:number", "o2:number"], "o1-o2");
            verifyToPrimitive(()=>(o2/o1), 1, ["o2:number", "o1:number"], "o2/o1");

            retVal = 100;
            var n = o;
            verifyToPrimitive(()=>(++n), 101, ["number"], "++n");
            n = o;
            verifyToPrimitive(()=>(n++), 100, ["number"], "n++");
            n = o;
            verifyToPrimitive(()=>(--n), 99, ["number"], "--n");
            n = o;
            verifyToPrimitive(()=>(n--), 100, ["number"], "n--");


            retVal = "abc";
            verifyToPrimitive(()=>(1-o), NaN, ["number"], "1-o ([@@toPrimitive] returns string)");
            verifyToPrimitive(()=>(o-2), NaN, ["number"], "o-2 ([@@toPrimitive] returns string)");

            
            
            

            retVal = NaN;
            verifyToPrimitive(()=>String(o), "NaN", ["string"], "String()");
            verifyToPrimitive(()=>parseFloat(o), NaN, ["string"], "parseFloat()");
            verifyToPrimitive(()=>parseInt(o), NaN, ["string"], "parseInt()");
            verifyToPrimitive(()=>decodeURI(o), "NaN", ["string"], "decodeURI()");

            
            
            

            retVal = NaN;
            var x = {};
            verifyToPrimitive(()=>Object.defineProperty(x, o, {writable:true, enumerable:true, configurable:true, value: 'abc123'}), x, ["string"], "Object.defineProperty()");
            verifyToPrimitive(()=>x[o], 'abc123', ["string"], "x[o]");
            verifyToPrimitive(()=>x.hasOwnProperty(o), true, ["string"], "Object.prototype.hasOwnProperty()");
            verifyToPrimitive(()=>x.propertyIsEnumerable(o), true, ["string"], "Object.prototype.propertyIsEnumerable()");
            verifyToPrimitive(()=>(o in x), true, ["string"], "o in x");

            
            
            

            retVal = 100;
            verifyToPrimitive(()=>(o+1), 101, ["default"], "o+1");
            verifyToPrimitive(()=>(2+o), 102, ["default"], "2+o");
            verifyToPrimitive(()=>(o+'abc'), '100abc', ["default"], "o+'abc'");
            verifyToPrimitive(()=>('abc'+o), 'abc100', ["default"], "'abc'+o");
            verifyToPrimitive(()=>(o1+o2), 200, ["o1:default", "o2:default"], "o1+o2");
            verifyToPrimitive(()=>(o2+o1), 200, ["o2:default", "o1:default"], "o2+o1");

            retVal = "abc";
            verifyToPrimitive(()=>(o+1), "abc1", ["default"], "o+1 ([@@toPrimitive] returns string)");
            verifyToPrimitive(()=>(2+o), "2abc", ["default"], "2+1 ([@@toPrimitive] returns string)");
            verifyToPrimitive(()=>(o+'def'), 'abcdef', ["default"], "o+'def'");
            verifyToPrimitive(()=>('def'+o), 'defabc', ["default"], "'def'+o");
            verifyToPrimitive(()=>(o1+o2), "abcabc", ["o1:default", "o2:default"], "o1+o2");
            verifyToPrimitive(()=>(o2+o1), "abcabc", ["o2:default", "o1:default"], "o2+o1");

            
            
            

            retVal = 100;
            verifyToPrimitive(()=>(o<1), false, ["number"], "o<1");
            verifyToPrimitive(()=>(1<o), true, ["number"], "1<o");
            verifyToPrimitive(()=>(o<=25), false, ["number"], "o<=25");
            verifyToPrimitive(()=>(-9<=o), true, ["number"], "-9<=o");
            verifyToPrimitive(()=>(o>1), true, ["number"], "o>1");
            verifyToPrimitive(()=>(1>o), false, ["number"], "1>o");
            verifyToPrimitive(()=>(o>=25), true, ["number"], "o>=25");
            verifyToPrimitive(()=>(-9>=o), false, ["number"], "-9>=o");
            verifyToPrimitive(()=>(o1<o2), false, ["o1:number", "o2:number"], "o1<o2");
            verifyToPrimitive(()=>(o2<=o1), true, ["o2:number", "o1:number"], "o2<=o1");
            verifyToPrimitive(()=>(o1>o2), false, ["o1:number", "o2:number"], "o1>o2");
            verifyToPrimitive(()=>(o2>=o1), true, ["o2:number", "o1:number"], "o2>=o1");

            
            
            

            verifyToPrimitive(()=>(o1==o2), false, [], ""); 

            retVal = 100;
            verifyToPrimitive(()=>(o==100), true, ["default"], "o==100");
            verifyToPrimitive(()=>(100==o), true, ["default"], "100==o");
            verifyToPrimitive(()=>(o==1), false, ["default"], "o==1");
            verifyToPrimitive(()=>(1==o), false, ["default"], "1==o");

            retVal = true;
            verifyToPrimitive(()=>(o==true), true, ["default"], "o==true");
            verifyToPrimitive(()=>(true==o), true, ["default"], "true==o");
            verifyToPrimitive(()=>(o==false), false, ["default"], "o==false");
            verifyToPrimitive(()=>(false==o), false, ["default"], "false==o");

            retVal = 'abc';
            verifyToPrimitive(()=>(o=='abc'), true, ["default"], "o=='abc'");
            verifyToPrimitive(()=>('abc'==o), true, ["default"], "'abc'==o");
            verifyToPrimitive(()=>(o=='abc1'), false, ["default"], "o=='abc1'");
            verifyToPrimitive(()=>('abc1'==o), false, ["default"], "'abc1'==o");

            retVal = Symbol();
            verifyToPrimitive(()=>(o==retVal), true, ["default"], "o==retVal (retVal=Symbol())");
            verifyToPrimitive(()=>(retVal==o), true, ["default"], "retVal==o (retVal=Symbol())");
            verifyToPrimitive(()=>(o==Symbol()), false, ["default"], "o==Symbol()");
            verifyToPrimitive(()=>(Symbol()==o), false, ["default"], "Symbol()==o");

            
            
            

            retVal = 'Jan 1, 2016';
            verifyToPrimitive(()=>new Date(o).valueOf(), new Date(retVal).valueOf(), ["default"], "Date() constructor");

            
            
            

            retVal = NaN;
            verifyToPrimitive(()=>Date.prototype.toJSON.call(o), null, ["number"], "Date.prototype.toJSON()");

            
            
            

            Object.defineProperty(o, 'toString', { writable:true, configurable:true, enumerable:true, value: function() { return 'abc'; } });
            Object.defineProperty(o, 'valueOf', { writable:true, configurable:true, enumerable:true, value: function() { return 123; } });
            print(123, Date.prototype[Symbol.toPrimitive].call(o, 'number'), "Date.prototype[@@toPrimitive].call(o, 'number')");
            print('abc', Date.prototype[Symbol.toPrimitive].call(o, 'string'), "Date.prototype[@@toPrimitive].call(o, 'string')");
            print('abc', Date.prototype[Symbol.toPrimitive].call(o, 'default'), "Date.prototype[@@toPrimitive].call(o, 'default')");

        }
    },
    {
        name: "ToPrimitive calling user-defined [@@toPrimitive] method that returns Object throws TypeError",
        body: function ()
        {
            var o = {};

            [{}, new Date(), Error(), new String(), new Boolean(), new Number()].forEach(function(retVal) {
                o[Symbol.toPrimitive] = function(h) { return retVal; }

                
                
                

                print(()=>(Number(o)), TypeError, "Number()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>new Uint8Array([o]), TypeError, "TypedArray constructor", "[Symbol.toPrimitive]: invalid argument");
                print(()=>isFinite(o), TypeError, "isFinite()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>isNaN(o), TypeError, "isNaN()", "[Symbol.toPrimitive]: invalid argument");

                print(()=>(1-o), TypeError, "1-o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o-2), TypeError, "o-2", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(1*o), TypeError, "1*o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o*2), TypeError, "o*2", "[Symbol.toPrimitive]: invalid argument");
                print(()=>Math.log10(o), TypeError, "Math.log10()", "[Symbol.toPrimitive]: invalid argument");

                var n = o;
                print(()=>(++n), TypeError, "++n", "[Symbol.toPrimitive]: invalid argument");
                n = o;
                print(()=>(n++), TypeError, "n++", "[Symbol.toPrimitive]: invalid argument");
                n = o;
                print(()=>(--n), TypeError, "--n", "[Symbol.toPrimitive]: invalid argument");
                n = o;
                print(()=>(n--), TypeError, "n--", "[Symbol.toPrimitive]: invalid argument");

                
                
                

                print(()=>String(o), TypeError, "String()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>parseFloat(o), TypeError, "parseFloat()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>parseInt(o), TypeError, "parseInt()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>decodeURI(o), TypeError, "decodeURI()", "[Symbol.toPrimitive]: invalid argument");

                
                
                

                var x = {};
                print(()=>Object.defineProperty(x, o, {}), TypeError, "Object.defineProperty()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>x[o], TypeError, "x[o]", "[Symbol.toPrimitive]: invalid argument");
                print(()=>x.hasOwnProperty(o), TypeError, "Object.prototype.hasOwnProperty()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>x.propertyIsEnumerable(o), TypeError, "Object.prototype.propertyIsEnumerable()", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o in x), TypeError, "o in x", "[Symbol.toPrimitive]: invalid argument");

                
                
                

                print(()=>(o+1), TypeError, "o+1", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(2+o), TypeError, "2+o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o+'abc'), TypeError, "o+'abc'", "[Symbol.toPrimitive]: invalid argument");
                print(()=>('abc'+o), TypeError, "'abc'+o", "[Symbol.toPrimitive]: invalid argument");

                
                
                

                print(()=>(o<1), TypeError, "o<1", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(1<o), TypeError, "1<o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o<=25), TypeError, "o<=25", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(-9<=o), TypeError, "-9<=o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o>1), TypeError, "o>1", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o>=25), TypeError, "o>=25", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(-9>=o), TypeError, "-9>=o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o<o), TypeError, "o<o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o<=o), TypeError, "o<=o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o>o), TypeError, "o>o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o>=o), TypeError, "o>=o", "[Symbol.toPrimitive]: invalid argument");

                
                
                

                print(o==o, "o==o should not call ToPrimitive");
                print(()=>('abc'==o), TypeError, "'abc'==o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o=='abc'), TypeError, "o=='abc'", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(100==o), TypeError, "100==o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o==100), TypeError, "o==100", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(Symbol()==o), TypeError, "Symbol()==o", "[Symbol.toPrimitive]: invalid argument");
                print(()=>(o==Symbol()), TypeError, "o==Symbol()", "[Symbol.toPrimitive]: invalid argument");
            });
        }
    },
    {
       name: "Array type conversion tests: lastIndexOf()",
       body: function ()
       {
            var p1 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a1, "0", {configurable : true, get: function(){ return 30;}});
                    return a1.length;
                }
            };
            var a1 = [1, 2, 3, 4, 5];
            print(3, a1.lastIndexOf(4, p1), "ToPrimitive: lastIndexOf() method returned incorrect result as array type changed to ES5 array.");

            var a1_proto = {};
            Object.defineProperty(a1_proto, "1", {
                  get: function(){
                        Object.defineProperty(a1_prototest, "0", {configurable : true, get: function(){ return 30;}});
                        return 2;
                  }
            });

            var a1_prototest = [, , 3, 4, 5];
            a1_prototest.__proto__ = a1_proto;
            var c1_prototest = [].lastIndexOf.call(a1_prototest, 30);
            print(0, c1_prototest, "ToPrimitive: The lastIndexOf() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");
        }
    },
    {
       name: "Array type conversion tests: indexOf()",
       body: function ()
       {
            var p2 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a2, "0", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };
            var a2 = [1, 2, 3, 4, 5];
            print(3, a2.indexOf(4, p2), "ToPrimitive: indexOf() method returned incorrect result as array type changed to ES5 array.");

            var a2_proto = {};
            Object.defineProperty(a2_proto, "0", {
                  get: function(){
                        Object.defineProperty(a2_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a2_prototest = [, , 3, 4, 5];
            a2_prototest.__proto__ = a2_proto;
            var c2_prototest = [].indexOf.call(a2_prototest, 30);
            print(1, c2_prototest, "ToPrimitive: The indexOf() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");
       }
    },
    {
       name: "Array type conversion tests: splice()",
       body: function ()
       {
            var p3 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a3, "0", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };
            var a3 = [1, 2, 3, 4, 5];
            var b3 = a3.splice(p3);
            print([30,2,3,4,5], b3, "ToPrimitive: splice() method returned incorrect result as array type changed to ES5 array.");

            var a3_proto = {};
            Object.defineProperty(a3_proto, "0", {
                  get: function(){
                        Object.defineProperty(a3_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a3_prototest = [, , 3, 4, 5];
            a3_prototest.__proto__ = a3_proto;
            var c3_prototest = [].splice.call(a3_prototest, 0);
            print([1,30,3,4,5], c3_prototest, "ToPrimitive: The splice() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");

            function a3_constructor(x) { };
            a3_constructor[Symbol.species] = function () {
                Object.defineProperty(a3_species, "0", { configurable: true, get: function () { return 30; } });
                return {};
            };

            var a3_species = [1, 2, 3, 4, 5];
            a3_species['constructor'] = a3_constructor;
            var c3_species = a3_species.splice(0);
            print(30, c3_species["0"], "The splice() method returned incorrect result as array was converted to an ES5Array.");
            print("30,2,3,4,5", [].join.call(c3_species, ","), "The splice() method returned incorrect result as array was converted to an ES5Array.");
       }
   },
    {
       name: "Array type conversion tests: slice()",
       body: function ()
       {
            var p4 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a4, "0", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };
            var a4 = [1, 2, 3, 4, 5];
            var b4 = a4.slice(p4);
            print([30,2,3,4,5], b4, "ToPrimitive: slice() method returned incorrect result as array type changed to ES5 array.");

            var a4_proto = {};
            Object.defineProperty(a4_proto, "0", {
                  get: function(){
                        Object.defineProperty(a4_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a4_prototest = [, , 3, 4, 5];
            a4_prototest.__proto__ = a4_proto;
            var c4_prototest = [].slice.call(a4_prototest, 0);
            print([1,30,3,4,5], c4_prototest, "ToPrimitive: The slice() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");

            function a4_constructor(x) { };
            a4_constructor[Symbol.species] = function () {
                Object.defineProperty(a4_species, "0", { configurable: true, get: function () { return 30; } });
                return {};
            };

            var a4_species = [1, 2, 3, 4, 5];
            a4_species['constructor'] = a4_constructor;
            var c4_species = a4_species.slice(0);
            print(30, c4_species["0"], "The slice() method returned incorrect result as array was converted to an ES5Array.");
            print("30,2,3,4,5", [].join.call(c4_species, ","), "The slice() method returned incorrect result as array was converted to an ES5Array.");
       }
   },
    {
       name: "Array type conversion tests: includes()",
       body: function ()
       {
            var p5 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a5, "0", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };
            var a5 = [1, 2, 3, 4, 5];
            print(a5.includes(30, p5), "ToPrimitive: includes() method returned incorrect result as array type changed to ES5 array.");

            var a5_proto = {};
            Object.defineProperty(a5_proto, "0", {
                  get: function(){
                        Object.defineProperty(a5_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a5_prototest = [, , 3, 4, 5];
            a5_prototest.__proto__ = a5_proto;
            print([].includes.call(a5_prototest, 30), "The includes() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");
       }
    },
    {
       name: "Array type conversion tests: find() and findIndex().",
       body: function ()
       {
            var p2 = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a2, "0", {configurable : true, get: function(){ return 20;}});

                    
                    Object.defineProperty(a2, "1", {configurable : true, get: function(){ return 30;}});
                    return 10;
                }
            };
            var a2 = [1, 2, 3, 4, 5];
            var c2 = a2.find(function(x) { return x % p2 == 0; });
            print(30, c2, "The find() method returned incorrect result as array was converted to an ES5Array.");

            var a2_prototest = [,, 3, 4, 5];
            var a2_proto = {};
            Object.defineProperty(a2_proto, "0", {
                get: function(){
                        Object.defineProperty(a2_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 7;
                }
            });

            a2_prototest.__proto__ = a2_proto;
            var c2_prototest = [].find.call(a2_prototest, function(x) { return x % 10 == 0; });
            print(30, c2_prototest, "The find() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");

            var p3 = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a3, "0", {configurable : true, get: function(){ return 30;}});

                    
                    Object.defineProperty(a3, "1", {configurable : true, get: function(){ return 30;}});
                    return 30;
                }
            };
            var a3 = [1, 2, 3, 4, 5];
            var c3 = a3.findIndex(function(x) { return x == p3; });
            print(1, c3, "The findIndex() method returned incorrect result as array was converted to an ES5Array.");
        }
    },
    {
       name: "Array type conversion tests: map().",
       body: function ()
       {
            var p4 = function(x)
            {
                    Object.defineProperty(a4, "1", {configurable : true, get: function(){ return 30;}});
                    return x * x;
            };
            var a4 = [1, 2, 3, 4, 5];
            var c4 = a4.map(p4);
            print([1,900,9,16,25], c4, "The map() method returned incorrect result as array was converted to an ES5Array.");

            var p4_typedarray = function(x)
            {
                    Object.defineProperty(a4_typedarray, "1", {configurable : false, value: 30});
                    return x * x;
            };
            var a4_typedarray = new Int32Array([1, 2, 3, 4, 5]);
            var c4_typedarray = a4_typedarray.map(p4_typedarray);
            print([1,900,9,16,25], c4_typedarray, "The map() method returned incorrect result for TypedArray.");

            function a4_constructor(x) { };
            a4_constructor[Symbol.species] = function () {
                Object.defineProperty(a4_species, "1", { configurable: true, get: function () { return 30; } });
                return {};
            };

            var a4_species = [1, 2, 3, 4, 5];
            a4_species['constructor'] = a4_constructor;
            var c4_species = a4_species.map(function (x) { return x * x; });
            print([1, 900, 9, 16, 25], c4_species, "Map returned incorrect result as array was converted to an ES5Array.");

            var a4_proto = {};
            Object.defineProperty(a4_proto, "0", {
                get: function(){
                        Object.defineProperty(a4_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 7;
                }
            });

            var SquareNumber = function(x)
            {
                return x * x;
            };
            var a4_prototest = [, , 3, 4, 5];
            a4_prototest.__proto__ = a4_proto;
            var c4_prototest = [].map.call(a4_prototest, SquareNumber);
            print([49,900,9,16,25], c4_prototest, "The map() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");
       }
    },
    {
       name: "Array type conversion tests: reduce().",
       body: function ()
       {
            var p6 = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a6, "0", {configurable : true, get: function(){ return 30;}});

                    
                    Object.defineProperty(a6, "1", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };

            var a6 = [1, 2, 3, 4, 5];
            var c6 = a6.reduce(AddNumbers, p6);
            print(43, c6, "The reduce() method returned incorrect result as array was converted to an ES5Array.");

            var a6_proto = {};
            Object.defineProperty(a6_proto, "0", {
                get: function(){
                        Object.defineProperty(a6_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                }
            });

            var a6_prototest = [, , 3, 4, 5];
            a6_prototest.__proto__ = a6_proto;
            var c6_prototest = [].reduce.call(a6_prototest, AddNumbers);
            print(43, c6_prototest, "The reduce() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");

            
            var a6_es5 = [1, 2, 3, 4, 5];
            Object.defineProperty(a6_es5, "0", {configurable : true, get: function(){ return 30;}});
            var c6_es5 = a6_es5.reduce(AddNumbers);
            print(44, c6_es5, "The reduce() method returned incorrect result for an ES5Array.");
        }
    },
    {
       name: "Array type conversion tests: reduceRight().",
       body: function ()
       {
            var p7 = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a7, "4", {configurable : true, get: function(){ return 30;}});

                    
                    Object.defineProperty(a7, "1", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };

            var a7 = [1, 2, 3, 4, 5];
            var c7 = a7.reduceRight(AddNumbers, p7);
            print(43, c7, "The reduceRight() method returned incorrect result as array was converted to an ES5Array.");

            var a7_proto = {};
            Object.defineProperty(a7_proto, "4", {
                get: function(){
                        Object.defineProperty(a7_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 5;
                }
            });

            var a7_prototest = [1, , 3, 4, ,];
            a7_prototest.__proto__ = a7_proto;
            var c7_prototest = [].reduceRight.call(a7_prototest, AddNumbers);
            print(43, c7_prototest, "The reduceRight() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");

            
            var a7_es5 = [1, 2, 3, 4, 5];
            Object.defineProperty(a7_es5, "0", {configurable : true, get: function(){ return 30;}});
            var c7_es5 = a7_es5.reduceRight(AddNumbers);
            print(44, c7_es5, "The reduceRight() method returned incorrect result for an ES5Array.");
        }
    },
    {
       name: "Array type conversion tests: some().",
       body: function ()
       {
            var p8 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a8, "1", {configurable : true, get: function(){ return 30;}});
                    return 30;
                }
            };

            function MatchNumber(numberToMatch)
            {
                return numberToMatch == p8;
            }
            var a8 = [1, 2, 3, 4, 5];
            var c8 = a8.some(MatchNumber);
            print(c8, "The some() method returned incorrect result as array was converted to an ES5Array.");

            var a8_proto = {};
            Object.defineProperty(a8_proto, "0", {
                get: function(){
                        Object.defineProperty(a8_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 5;
                }
            });

            var a8_prototest = [, , 3, 4, 5];
            a8_prototest.__proto__ = a8_proto;
            var c8_prototest = [].some.call(a8_prototest, function(elem){ return elem == 30; });
            print(c8_prototest, "The some() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");
        }
    },
    {
       name: "Array type conversion tests: every().",
       body: function ()
       {
            var p9 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a9, "1", {configurable : true, get: function(){ return 30;}});
                    return 30;
                }
            };

            function CompareNumber(numberToMatch)
            {
                return numberToMatch < p9;
            }
            var a9 = [1, 2, 3, 4, 5];
            var c9 = a9.every(CompareNumber);
            print(c9, "The every() method returned incorrect result as array was converted to an ES5Array.");

            var a9_proto = {};
            Object.defineProperty(a9_proto, "0", {
                get: function(){
                        Object.defineProperty(a9_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                }
            });

            var a9_prototest = [, , 3, 4, 5];
            a9_prototest.__proto__ = a9_proto;
            var c9_prototest = [].every.call(a9_prototest, function(elem){ return elem < 30;});
            print(c9_prototest, "The every() method returned incorrect result as array was converted to an ES5Array in the property getter of the prototype.");
        }
    },
    {
        name: "Array type conversion tests: fill().",
        body: function ()
        {
            var temp = 30;
            var p10 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a10, 1, {configurable : true, get: function(){ return temp;}, set: function(value){ temp = value;}});
                    return 0;
                }
            };
            var a10 = [1, 2, 3, 4, 5];
            var c10 = a10.fill(0, p10);
            print([0,0,0,0,0], c10, "ToPrimitive: The fill() method returned incorrect result as array type changed to ES5 array.");
        }
    },
    {
       name: "Array type conversion tests: filter().",
       body: function ()
       {
            var p11 = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a11, "0", {configurable : true, get: function(){ return 30;}});

                    
                    Object.defineProperty(a11, "4", {configurable : true, get: function(){ return 30;}});
                    return 0;
                }
            };

            var a11 = [1, 2, 3, 4, 5];
            var c11 = a11.filter(function(elem){ return elem %2 == p11; });
            print([2,4,30], c11, "ToPrimitive: The filter() method returned incorrect result as array type changed to ES5 array.");

            var a11_proto = {};
            Object.defineProperty(a11_proto, "0", {
                  get: function(){
                        Object.defineProperty(a11_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a11_prototest = [, , 3, 4, 5];
            a11_prototest.__proto__ = a11_proto;
            var c11_prototest = [].filter.call(a11_prototest, function(elem){ return elem %2 == 0; });
            print([30,4], c11_prototest, "ToPrimitive: The filter() method returned incorrect result as array type changed to ES5 array in the property getter of the prototype.");

            var p11_typedarray = {
                [Symbol.toPrimitive] (hint) {
                    
                    Object.defineProperty(a11_typedarray, "0", {configurable : false, value:30 });

                    
                    Object.defineProperty(a11_typedarray, "4", {configurable : false, value:30 });
                    return 0;
                }
            };

            var a11_typedarray = new Int16Array([1,2,3,4,5]);
            var c11_typedarray = a11_typedarray.filter(function(elem){ return elem %2 == p11_typedarray; });
            print([2,4,30], c11_typedarray, "ToPrimitive: The filter() method returned incorrect result for TypedArray.");

            function a11_constructor(x) { };
            a11_constructor[Symbol.species] = function () {
                Object.defineProperty(a11_species, "0", { configurable: true, get: function () { return 30; } });
                return {};
            };

            var a11_species = [1, 2, 3, 4, 5];
            a11_species['constructor'] = a11_constructor;
            var c11_species = a11_species.filter(function (elem) { return elem % 2 == 0; });
            print([30, 2, 4], c11_species, "The filter() returned incorrect result as array was converted to an ES5Array.");
       }
    },
    {
       name: "Array type conversion tests: foreach().",
       body: function ()
       {
            var a18 = [1,2,3,4,5];
            var c18 = "";

            a18.forEach( function (item, index)
                {
                    if(index==0)
                    {
                        
                        Object.defineProperty(a18, "0", {configurable : true, get: function(){ return 30;}});

                        
                        Object.defineProperty(a18, "1", {configurable : true, get: function(){ return 30;}});
                    }
                    else
                    {
                        c18 = c18 + ","
                    }

                    c18 = c18 + item*item;
                });
            print("1,900,9,16,25", c18, "ToPrimitive: The forEach() method returned incorrect result for as array type changed to ES5 array.");

            var a18_proto = {};
            Object.defineProperty(a18_proto, "0", {
                  get: function(){
                        Object.defineProperty(a18_prototest, "1", {configurable : true, get: function(){ return 30;}});
                        return 1;
                  }
            });

            var a18_prototest  = [,,3,4,5];
            a18_prototest.__proto__ = a18_proto;
            var c18_prototest  = "";

            [].forEach.call(a18_prototest, function (item, index)
                {
                    if(index>0)
                    {
                        c18_prototest  += ","
                    }

                    c18_prototest += item*item;
                });
            print("1,900,9,16,25", c18_prototest, "ToPrimitive: The forEach() method returned incorrect result for as array type changed to ES5 array.");

            var a18_typedarray = new Int16Array([1,2,3,4,5]);
            var c18_typedarray = "";

            a18_typedarray.forEach( function (item, index)
                {
                    if(index==0)
                    {
                        
                        Object.defineProperty(a18_typedarray, "0", {configurable : false, value:30 });

                        
                        Object.defineProperty(a18_typedarray, "1", {configurable : false, value:30 });
                    }
                    else
                    {
                        c18_typedarray = c18_typedarray + ","
                    }

                    c18_typedarray = c18_typedarray + item*item;
                });
            print("1,900,9,16,25", c18_typedarray, "ToPrimitive: The forEach() returned incorrect result for TypedArray.");
        }
    },
    {
       name: "Array type conversion tests: copyWithin().",
       body: function ()
       {
            var p21 = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a21, "0", {configurable : true, get: function(){ return 30;}});
                    return -2;
                }
            };

            var a21 = [1,2,3,4,5];
            var c21 = a21.copyWithin(p21);
            print([30,2,3,30,2], c21, "ToPrimitive: The copyWithin() method returned incorrect result as array type changed to ES5 array.");

            var a21_proto = {};
            Object.defineProperty(a21_proto, "0", {
                  get: function(){
                        Object.defineProperty(a21_prototest, "1", {configurable : true, get: function(){ return 2;}});
                        return 30;
                  }
            });

            var a21_prototest = [,,3,4,5];
            a21_prototest.__proto__ = a21_proto;
            var c21_prototest = [].copyWithin.call(a21_prototest, -2);
            print("30,2,3,30,2", [].join.call(c21_prototest, ","), "ToPrimitive: The copyWithin() method returned incorrect result as array type changed to ES5Array in the property getter of the prototype.");

            var p21_typedarray = {
                [Symbol.toPrimitive] (hint) {
                    Object.defineProperty(a21_typedarray, "0", {configurable : false, value:30 });
                    return -2;
                }
            };

            var a21_typedarray = new Int16Array([1,2,3,4,5]);
            var c21_typedarray = a21_typedarray.copyWithin(p21_typedarray);
            print([30,2,3,30,2], c21_typedarray, "ToPrimitive: The copyWithin() method returned incorrect result for TypedArray.");
       }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
