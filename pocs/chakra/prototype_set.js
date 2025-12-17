function f() {
    function inner() { }
    inner.__proto__ = {b:'b'};  
    new inner();                
    for (var s in inner) {      
        inner[s];
    }
    inner.prototype = {sox:'red'}; 
    return new inner();            
}

f();
var Boston = f();
if (Boston.sox === 'red')
    print('pass');

