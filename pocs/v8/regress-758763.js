const re = /./g;
function toSlowMode() { re.slow = true; }
re[Symbol.split]("abc", { valueOf: toSlowMode });
