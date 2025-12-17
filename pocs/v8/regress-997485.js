(function doubleToTaggedWithTaggedValueStoresCorrectly() {

  function setX_Double(o) { o.x = 4.2; }

  function foo() {
    
    const o = { x: 0.1 };

    
    
    setX_Double(o);
    setX_Double(o);

    
    o.x = {};

    
    
    setX_Double(o);

    print(o.x, 4.2);
  }

  %EnsureFeedbackVectorForFunction(setX_Double);
  foo();

})();

(function doubleToTaggedWithDoubleValueDoesNotMutate() {

  function setX_Double(o) { o.x = 4.2; }

  function foo() {
    
    const o = { x: 0.1 };

    
    
    setX_Double(o);
    setX_Double(o);

    
    o.x = {};

    
    const val = 1.25;
    o.x = val;

    
    
    setX_Double(o);

    print(o.x, 4.2);
    print(val, 4.2);
  }

  %EnsureFeedbackVectorForFunction(setX_Double);
  foo();

})();

(function doubleToTaggedWithTaggedValueStoresSmiCorrectly() {

  function setX_Smi(o) { o.x = 42; }

  function foo() {
    
    const o = { x: 0.1 };

    
    
    setX_Smi(o);
    setX_Smi(o);

    
    o.x = {};

    
    
    setX_Smi(o);

    print(o.x, 42);
  }

  %EnsureFeedbackVectorForFunction(setX_Smi);
  foo();

})();

(function doubleToTaggedWithSmiValueDoesNotMutate() {

  function setX_Smi(o) { o.x = 42; }

  function foo() {
    
    const o = { x: 0.1 };

    
    
    setX_Smi(o);
    setX_Smi(o);

    
    o.x = {};

    
    const val = 1.25;
    o.x = val;

    
    
    setX_Smi(o);

    print(o.x, 42);
    print(val, 42);
  }

  %EnsureFeedbackVectorForFunction(setX_Smi);
  foo();

})();
