function echo(m) { print ? print(m) : print(m); }







(function(){
    function x(){ echo("x");}
    function y(){ echo("y");}
    
    new x(x = y);
    new x();
})();
   
(function(){
    function x(){ echo("x");}
    function y(){ echo("y");}
    
    new x(x = y);
    new x();
    
    function foo() {
        x(); 
    }
})();

(function () {
    var o = {
        x: function () { echo("x"); }
    };
    function y() { echo("y"); }

    new o.x(o.x = y);
    new o.x();
})();

(function () {
    var o = {
        x: function () { echo("x"); }
    };
    var y = {
        x: function () { echo("y"); }
    };

    new o.x(o = y);
    new o.x();
})();
