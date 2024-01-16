

function blackhole() {
  
  with ({});
}

function inner() {
  
  
  
  const zero = Math.pow(0, 1);
  const one = Math.pow(1, 1);
  const two = Math.pow(2, 1);
  const three = Math.pow(3, 1);
  const four = Math.pow(4, 1);

  
  {
    let a0 = Array.prototype.slice.call(arguments, 0, zero);
    let a1 = Array.prototype.slice.call(arguments, 0, one);
    let a2 = Array.prototype.slice.call(arguments, 0, two);
    let a3 = Array.prototype.slice.call(arguments, 0, three);
    let a4 = Array.prototype.slice.call(arguments, 0, four);
    blackhole(a0, a1, a2, a3, a4);
  }
  {
    let a0 = Array.prototype.slice.call(arguments, 1, zero);
    let a1 = Array.prototype.slice.call(arguments, 1, one);
    let a2 = Array.prototype.slice.call(arguments, 1, two);
    let a3 = Array.prototype.slice.call(arguments, 1, three);
    let a4 = Array.prototype.slice.call(arguments, 1, four);
    blackhole(a0, a1, a2, a3, a4);
  }

  
  {
    let a0 = Array.prototype.slice.call(arguments, zero, zero);
    let a1 = Array.prototype.slice.call(arguments, zero, one);
    let a2 = Array.prototype.slice.call(arguments, zero, two);
    let a3 = Array.prototype.slice.call(arguments, zero, three);
    let a4 = Array.prototype.slice.call(arguments, zero, four);
    blackhole(a0, a1, a2, a3, a4);
  }
  {
    let a0 = Array.prototype.slice.call(arguments, one, zero);
    let a1 = Array.prototype.slice.call(arguments, one, one);
    let a2 = Array.prototype.slice.call(arguments, one, two);
    let a3 = Array.prototype.slice.call(arguments, one, three);
    let a4 = Array.prototype.slice.call(arguments, one, four);
    blackhole(a0, a1, a2, a3, a4);
  }
}


assertEq(isSmallFunction(inner), true);


function outer0() {
  trialInline();
  return inner();
}


function outer1() {
  trialInline();
  return inner(1);
}


function outer2() {
  trialInline();
  return inner(1, 2);
}


function outer3() {
  trialInline();
  return inner(1, 2, 3);
}


function outer4() {
  trialInline();
  return inner(1, 2, 3, 4);
}


with ({});

for (var i = 0; i < 50; i++) {
  outer0();
  outer1();
  outer2();
  outer3();
  outer4();
}
