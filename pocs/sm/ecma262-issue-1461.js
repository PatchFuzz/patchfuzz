let log = [];

{
  async function f() {
    var p = Promise.resolve(0);
    Object.defineProperty(p, "constructor", {get() { throw "hi" }});
    for await (var x of [p]);
  }
  Promise.resolve(0)
         .then(() => log.push("tick 1"))
         .then(() => log.push("tick 2"))
         .then(() => log.push("tick 3"));
  f().catch(exc => log.push(exc));
}

drainJobQueue();
print(log.join(), "tick 1,tick 2,hi,tick 3");
