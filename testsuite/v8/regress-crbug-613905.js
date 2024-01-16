



Error.prepareStackTrace = (e,s) => s;
var CallSiteConstructor = Error().stack[0].constructor;

try {
  (new CallSiteConstructor(3, 6)).toString();
} catch (e) {
}
