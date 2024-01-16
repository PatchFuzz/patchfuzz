


gczeal(0);

function allocUntilFail() {
  gc(null, 'shrinking');

  const initialSize = gcparam("gcBytes");
  const initialMaxSize = gcparam("maxBytes");
  const initGCNumber = gcparam("majorGCNumber");

  
  gcparam("maxBytes", initialSize + 16 * 1024);

  let error;
  try {
    let a = [];
    while (true) {
      a.push(Symbol()); 
    }
  } catch(err) {
    error = err;
  }

  const finalGCNumber = gcparam("majorGCNumber");

  
  gcparam("maxBytes", initialMaxSize);

  gc();
  assertEq(error, "out of memory");
  return finalGCNumber - initGCNumber;
}


gcparam("minLastDitchGCPeriod", 5);
assertEq(gcparam("minLastDitchGCPeriod"), 5);


let gcCount = allocUntilFail();
assertEq(gcCount, 1)



gcCount = allocUntilFail();
assertEq(gcCount, 0)


sleep(6);


gcCount = allocUntilFail();
assertEq(gcCount, 1)
