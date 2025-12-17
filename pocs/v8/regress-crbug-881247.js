const resolvedPromise = Promise.resolve();

function spread() {
  const result = { ...resolvedPromise };
  %HeapObjectVerify(result);
  return result;
}

resolvedPromise[undefined] =  {a:1};
%HeapObjectVerify(resolvedPromise);

spread();

resolvedPromise[undefined] = undefined;
%HeapObjectVerify(resolvedPromise);

spread();
%HeapObjectVerify(resolvedPromise);
