function f() {
    arguments;
    print('pass');
}

let call = new Proxy(Function.prototype.call, {}); 
call.call(f);
