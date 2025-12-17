var shouldBailout = false;
var print = function(){return this};
var x = function(){return this};
var obj = {};


a=10;
function test3(){

(function(){;try{try{with({}) { try{throw StopIteration;}catch(e){} } }catch(e){}try{delete w.z;}catch(e){}}catch(e){};;})();
(function(){;if(shouldBailout){undefined--}})();
(function(){;"use strict"; for (let amspyz in [null, null, new Number(1)]) { if(!shouldBailout){function shapeyConstructor(jcmmhu){this.y = "udb6fudff4";if ( "" ) for (var ytqsfigbn in this) { }return this; }; shapeyConstructor(a);}; };;})();

};


test3();
test3();


shouldBailout = true;
test3();

print("Success");
