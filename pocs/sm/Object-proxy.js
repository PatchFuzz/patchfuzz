var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);

g.eval('var target = [1,2,3];');
g.eval('var handler = {has: ()=>false};');
g.eval('var proxy = new Proxy(target, handler);');
g.eval('var proxyProxy = new Proxy(proxy, proxy);');
g.eval('var revoker = Proxy.revocable(target, handler);');
g.eval('var revocable = revoker.proxy;');

var target = gDO.getOwnPropertyDescriptor('target').value;
var handler = gDO.getOwnPropertyDescriptor('handler').value;
var proxy = gDO.getOwnPropertyDescriptor('proxy').value;
var proxyProxy = gDO.getOwnPropertyDescriptor('proxyProxy').value;
var revocable = gDO.getOwnPropertyDescriptor('revocable').value;

print(target.isProxy, false);
print(target.proxyTarget, undefined);
print(target.proxyHandler, undefined);

print(handler.isProxy, false);
print(handler.proxyTarget, undefined);
print(handler.proxyHandler, undefined);

print(proxy.isProxy, true);
print(proxy.proxyTarget, target);
print(proxy.proxyHandler, handler);

print(proxyProxy.isProxy, true);
print(proxyProxy.proxyTarget, proxy);
print(proxyProxy.proxyHandler, proxy);

print(revocable.isProxy, true);
print(revocable.proxyTarget, target);
print(revocable.proxyHandler, handler);
g.eval('revoker.revoke();');
print(revocable.isProxy, true);
print(revocable.proxyTarget, null);
print(revocable.proxyHandler, null);
