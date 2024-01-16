




function f() {
    arguments;
    WScript.Echo('pass');
}

let call = new Proxy(Function.prototype.call, {}); 
call.call(f);
