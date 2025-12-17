setInterruptCallback(() => false);
0n == {
  valueOf() {
    interruptIf(true);
    for (;;) {}  
  }
};
