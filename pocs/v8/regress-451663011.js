const length = 32767;
const pattern_body = "^" + "a".repeat(length);
const pattern = new RegExp("(?<=" + pattern_body + ")", "m");
const input = "a".repeat(length) + "b" + '\n';
try { pattern.exec(input); } catch {}
