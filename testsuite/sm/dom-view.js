

var error;
try {
  encodeAsUtf8InBuffer("", "");
} catch (e) {
  error = e;
}

assertEq(error.message.includes("must be a Uint8Array"), true);

if (typeof reportCompare === "function")
    reportCompare(true, true);
