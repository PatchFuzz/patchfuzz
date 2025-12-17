function Dispatch(f) { f(); }
function Foo() { print("foo"); }
function DispatchFoo() { Dispatch(Foo); }


Dispatch(function(){})
Dispatch(function(){})
Dispatch(function(){})
Dispatch(function(){})
Dispatch(function(){})
DispatchFoo();
DispatchFoo();
DispatchFoo();


function Bar() { print("bar"); }
function DispatchBar() { Dispatch(Bar); }
function NestedDispatch() { Dispatch(DispatchBar) };
NestedDispatch();
NestedDispatch();
NestedDispatch();


function Dispatch2(f, arg) { f(arg); }
function Blah(arg) { print(arg); }
function DispatchBlah(arg) { Dispatch2(Blah, arg) }


Dispatch2(function(){})
Dispatch2(function(){})
DispatchBlah("blah");
DispatchBlah("blah");
DispatchBlah("blah");


function Dispatch3(a, b) { a(); b(); }
function DispatchFooBar() { Dispatch3(Foo, Bar); }
Dispatch3(function(){}, function(){});
Dispatch3(function(){}, function(){});
DispatchFooBar();
DispatchFooBar();
DispatchFooBar();


function DispatchCall(callback, thisArg) { callback.call(thisArg); }
function DispatchFooCall() { DispatchCall(Foo, {}); }
DispatchCall(function(){});
DispatchCall(function(){}, []);
DispatchFooCall();
DispatchFooCall();
DispatchFooCall();


function DispatchApply(callback, thisArg) { callback.apply(thisArg); }
function DispatchBarApply() { DispatchApply(Bar, {}); }
DispatchApply(function(){});
DispatchApply(function(){}, []);
DispatchBarApply();
DispatchBarApply();
DispatchBarApply();
