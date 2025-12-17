setInterruptCallback(function() {
  import("javascript:null");
  interruptIf(true);
});

interruptIf(true);
for (;;) {}  
