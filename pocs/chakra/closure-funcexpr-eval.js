function write(x) { print(x + ""); }

(function f(x) {
    write(f);
    write(x);
    (function () {
        write(f);
        write(x);
        eval('f = "inner f";');
        eval('x = "inner x";');
        write(f);
        write(x);
        eval('var f = "inner f 2";');
        eval('var x = "inner x 2";');
        write(f);
        write(x);
    })();
    write(f);
    write(x);
})('outer x');

var functest;
var vartest = 0;
var value = (function functest(arg) {
    eval('');
    if (arg) return 1;
    vartest = 1;
    functest = function(arg) {
        return 2;
    }; 
    return functest(true); 
})(false);
print('vartest = ' + vartest);
print('value = ' + value);

(function (){
    try {
        throw 'hello';
    }
    catch(e) {
        var f = function(){ eval('print(e)') };
    }
    f();
})();

var moobah = function moobah() {
    this.innerfb = function() {
        moobah.x = 'whatever';
    }
    this.innerfb();
    write(moobah.x);
}

moobah();
