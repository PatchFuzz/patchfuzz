const UNSET = -1;
const DONE = -2;

{
  let m = parseModule('');
  print(m.status, "New");

  moduleLink(m);
  print(m.asyncEvaluationOrder, UNSET);
  print(m.status, "Linked");

  moduleEvaluate(m);
  print(m.asyncEvaluationOrder, UNSET);
  print(m.status, "Evaluated");
}

{
  let m = parseModule('await 1;');

  moduleLink(m);
  print(m.asyncEvaluationOrder, UNSET);

  moduleEvaluate(m);
  print(m.status, "EvaluatingAsync");
  print(m.asyncEvaluationOrder, 0);

  drainJobQueue();
  print(m.status, "Evaluated");
  print(m.asyncEvaluationOrder, DONE);
}

{
  let m = parseModule('await 1; throw 2;');

  moduleLink(m);
  moduleEvaluate(m).catch(() => 0);
  print(m.status, "EvaluatingAsync");
  print(m.asyncEvaluationOrder, 0);

  drainJobQueue();
  print(m.status, "Evaluated");
  print(m.evaluationError, 2);
  print(m.asyncEvaluationOrder, DONE);
}

{
  let m = parseModule('throw 1; await 2;');
  moduleLink(m);
  moduleEvaluate(m).catch(() => 0);
  print(m.status, "EvaluatingAsync");
  print(m.asyncEvaluationOrder, 0);

  drainJobQueue();
  print(m.status, "Evaluated");
  print(m.evaluationError, 1);
  print(m.asyncEvaluationOrder, DONE);
}

{
  clearModules();
  let a = registerModule('a', parseModule(''));
  let b = registerModule('b', parseModule('import {} from "a"; await 1;'));

  moduleLink(b);
  moduleEvaluate(b);
  print(a.status, "Evaluated");
  print(a.asyncEvaluationOrder, UNSET);
  print(b.status, "EvaluatingAsync");
  print(b.asyncEvaluationOrder, 0);

  drainJobQueue();
  print(a.status, "Evaluated");
  print(a.asyncEvaluationOrder, UNSET);
  print(b.status, "Evaluated");
  print(b.asyncEvaluationOrder, DONE);
}

{
  clearModules();
  let a = registerModule('a', parseModule('await 1;'));
  let b = registerModule('b', parseModule('import {} from "a";'));

  moduleLink(b);
  moduleEvaluate(b);
  print(a.status, "EvaluatingAsync");
  print(a.asyncEvaluationOrder, 0);
  print(b.status, "EvaluatingAsync");
  print(b.asyncEvaluationOrder, 1);

  drainJobQueue();
  print(a.status, "Evaluated");
  print(a.asyncEvaluationOrder, DONE);
  print(b.status, "Evaluated");
  print(b.asyncEvaluationOrder, DONE);
}

{
  clearModules();
  let resolve;
  var promise = new Promise(r => { resolve = r; });
  let a = registerModule('a', parseModule('await promise;'));
  let b = registerModule('b', parseModule('await 2;'));
  let c = registerModule('c', parseModule('import {} from "a"; import {} from "b";'));

  moduleLink(c);
  moduleEvaluate(c);
  print(a.status, "EvaluatingAsync");
  print(a.asyncEvaluationOrder, 0);
  print(b.status, "EvaluatingAsync");
  print(b.asyncEvaluationOrder, 1);
  print(c.status, "EvaluatingAsync");
  print(c.asyncEvaluationOrder, 2);

  resolve(1);
  drainJobQueue();
  print(a.status, "Evaluated");
  print(a.asyncEvaluationOrder, DONE);
  print(b.status, "Evaluated");
  print(b.asyncEvaluationOrder, DONE);
  print(c.status, "Evaluated");
  print(c.asyncEvaluationOrder, DONE);
}

{
  clearModules();
  let a = registerModule('a', parseModule('throw 1;'));
  let b = registerModule('b', parseModule('import {} from "a"; await 2;'));

  moduleLink(b);
  moduleEvaluate(b).catch(() => 0);
  print(a.status, "Evaluated");
  print(a.asyncEvaluationOrder, UNSET);
  print(a.evaluationError, 1);
  print(b.status, "Evaluated");
  print(b.asyncEvaluationOrder, UNSET);
  print(b.evaluationError, 1);
}

{
  clearModules();
  let a = registerModule('a', parseModule('throw 1; await 2;'));
  let b = registerModule('b', parseModule('import {} from "a";'));

  moduleLink(b);
  moduleEvaluate(b).catch(() => 0);
  print(a.asyncEvaluationOrder, 0);
  print(a.status, "EvaluatingAsync");
  print(b.asyncEvaluationOrder, 1);
  print(b.status, "EvaluatingAsync");

  drainJobQueue();
  print(a.status, "Evaluated");
  print(a.evaluationError, 1);
  print(a.asyncEvaluationOrder, DONE);
  print(b.status, "Evaluated");
  print(b.evaluationError, 1);
  print(b.asyncEvaluationOrder, DONE);
}

{
  clearModules();
  let a = registerModule('a', parseModule('await 1; throw 2;'));
  let b = registerModule('b', parseModule('import {} from "a";'));

  moduleLink(b);
  moduleEvaluate(b).catch(() => 0);
  print(a.status, "EvaluatingAsync");
  print(a.asyncEvaluationOrder, 0);
  print(b.status, "EvaluatingAsync");
  print(b.asyncEvaluationOrder, 1);

  drainJobQueue();
  print(a.status, "Evaluated");
  print(a.evaluationError, 2);
  print(a.asyncEvaluationOrder, DONE);
  print(b.status, "Evaluated");
  print(b.evaluationError, 2);
  print(b.asyncEvaluationOrder, DONE);
}
