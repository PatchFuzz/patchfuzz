function fn() {
    var o = {};
    var p = {};
    o.__proto__ = p;
    o.pizza;                                  
    p.__proto__ = { pizza: 'pizza' };         
    return o.pizza;                           
}
if (fn() === 'pizza')
    print('pass');
