

var promise = async function(){ await 0; }();

try {
    settlePromiseNow(promise);
} catch {}
