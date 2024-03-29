


'use strict'

class LeakyPromise extends Promise {
  constructor(executor) {
    super((resolve, reject) => { resolve();});
    this.resolve = function() {assertEquals(this, undefined); };
    this.reject = function() {assertEquals(this, undefined); };
    executor(this.resolve, this.reject);
  }
}

const p1 = new LeakyPromise((r) => r());
const p2 = new LeakyPromise((_, r) => r());
