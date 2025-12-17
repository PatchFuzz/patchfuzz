Error.prepareStackTrace = (e,s) => s;
var CallSiteConstructor = Error().stack[0].constructor;

try {
  (new CallSiteConstructor(CallSiteConstructor, 6)).toString();
} catch (e) {
}
