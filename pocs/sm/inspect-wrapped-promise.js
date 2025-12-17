;

ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

g.promise1 = new Promise(() => {});
g.promise2 = Promise.resolve(42);
g.promise3 = Promise.reject(42);
g.promise4 = new Object();
g.promise5 = Promise.prototype;

let promiseDO1 = gw.getOwnPropertyDescriptor('promise1').value;
let promiseDO2 = gw.getOwnPropertyDescriptor('promise2').value;
let promiseDO3 = gw.getOwnPropertyDescriptor('promise3').value;
let promiseDO4 = gw.getOwnPropertyDescriptor('promise4').value;
let promiseDO5 = gw.getOwnPropertyDescriptor('promise5').value;

print(promiseDO1.isPromise, true);
print(promiseDO2.isPromise, true);
print(promiseDO3.isPromise, true);
print(promiseDO4.isPromise, false);
print(promiseDO5.isPromise, false);

print(promiseDO1.promiseState, "pending");
print(promiseDO2.promiseState, "fulfilled");
print(promiseDO3.promiseState, "rejected");
print(function () { promiseDO4.promiseState }, TypeError);
print(function () { promiseDO5.promiseState }, TypeError);

print(function () { promiseDO1.promiseValue }, TypeError);
print(promiseDO2.promiseValue, 42);
print(function () { promiseDO3.promiseValue }, TypeError);
print(function () { promiseDO4.promiseValue }, TypeError);
print(function () { promiseDO5.promiseValue }, TypeError);

print(function () { promiseDO1.promiseReason }, TypeError);
print(function () { promiseDO2.promiseReason }, TypeError);
print(promiseDO3.promiseReason, 42);
print(function () { promiseDO4.promiseReason }, TypeError);
print(function () { promiseDO5.promiseReason }, TypeError);



print(typeof promiseDO1.promiseAllocationSite === "object", true);
print(typeof promiseDO2.promiseAllocationSite === "object", true);
print(typeof promiseDO3.promiseAllocationSite === "object", true);
print(function () { promiseDO4.promiseAllocationSite }, TypeError);
print(function () { promiseDO5.promiseAllocationSite }, TypeError);



print(function () { promiseDO1.promiseResolutionSite }, TypeError);
print(typeof promiseDO2.promiseResolutionSite === "object", true);
print(typeof promiseDO3.promiseResolutionSite === "object", true);
print(function () { promiseDO4.promiseResolutionSite }, TypeError);
print(function () { promiseDO5.promiseResolutionSite }, TypeError);

print(promiseDO1.promiseID, 1);
print(promiseDO2.promiseID, 2);
print(promiseDO3.promiseID, 3);
print(function () { promiseDO4.promiseID }, TypeError);
print(function () { promiseDO5.promiseID }, TypeError);

print(typeof promiseDO1.promiseDependentPromises, "object");
print(typeof promiseDO2.promiseDependentPromises, "object");
print(typeof promiseDO3.promiseDependentPromises, "object");
print(function () { promiseDO4.promiseDependentPromises }, TypeError);
print(function () { promiseDO5.promiseDependentPromises }, TypeError);

print(promiseDO1.promiseDependentPromises.length, 0);
print(promiseDO2.promiseDependentPromises.length, 0);
print(promiseDO3.promiseDependentPromises.length, 0);

print(typeof promiseDO1.promiseLifetime, "number");
print(typeof promiseDO2.promiseLifetime, "number");
print(typeof promiseDO3.promiseLifetime, "number");
print(function () { promiseDO4.promiseLifetime }, TypeError);
print(function () { promiseDO5.promiseLifetime }, TypeError);

print(function () { promiseDO1.promiseTimeToResolution }, TypeError);
print(typeof promiseDO2.promiseTimeToResolution, "number");
print(typeof promiseDO3.promiseTimeToResolution, "number");
print(function () { promiseDO4.promiseTimeToResolution }, TypeError);
print(function () { promiseDO5.promiseTimeToResolution }, TypeError);
