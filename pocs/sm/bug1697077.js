var s0 = "A".repeat(10*1024);
var interrupted = false;
gczeal(0);
setInterruptCallback(() => {
  interrupted = true;
  startgc(7,'shrinking');
  return true;
});
print(interruptRegexp(/a(bc|bd)/, s0), null);
print(interrupted, true);
