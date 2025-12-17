function worker_code(arr) {
  postMessage("worker starting");
  const large_bigint = 2n ** 100_000n;
  function f() {
    
    try { f(); } catch (e) {
      postMessage("stack limit reached");
      postMessage(arr[large_bigint]);
    }
  }
  onmessage = f;
}
let w = new Worker(worker_code, { "arguments": [], "type": "function" });
print("worker starting", w.getMessage());
w.postMessage("");
print("stack limit reached", w.getMessage());
w.terminate();
