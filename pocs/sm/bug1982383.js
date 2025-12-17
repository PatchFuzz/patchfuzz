let inIon_lege = false;
let inIon_legt = false;
let inIon_ltge = false;
let inIon_ltgt = false;

function test_lege(negzero) {
  inIon_lege = inIon();
  const a = 3.337610787760802e-308;
  const b = 2.2250738585072014e-308;
  if (negzero <= (-a) + b) {
    if (negzero >= a - b) {
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (1 / Math.sign(negzero) == -Infinity) {
        return "What Should Have Been Impossible Happened!";
      }
    }
    return "The impossible happened!";
  }
  return "the ordinary happened!";
}

function test_ltge(negzero) {
  inIon_ltge = inIon();
  const a = 3.337610787760802e-308;
  const b = 2.2250738585072014e-308;
  if (negzero < (-a) + b) {
    if (negzero >= a - b) {
      if (1 / Math.sign(negzero) == -Infinity) {
        throw 1;
      }
      throw 2;
    }
    throw 3;
  }
  return 0;
}

function test_ltgt(negzero) {
  inIon_ltgt = inIon();
  const a = 3.337610787760802e-308;
  const b = 2.2250738585072014e-308;
  if (negzero < (-a) + b) {
    if (negzero > a - b) {
      if (1 / Math.sign(negzero) == -Infinity) {
        throw 1;
      }
      throw 2;
    }
    throw 3;
  }
  return 0;
}

function test_legt(negzero) {
  inIon_legt = inIon();
  const a = 3.337610787760802e-308;
  const b = 2.2250738585072014e-308;
  if (negzero <= (-a) + b) {
    if (negzero > a - b) {
      if (1 / Math.sign(negzero) == -Infinity) {
        throw 1;
      }
      throw 2;
    }
    return 1;
  }
  return 0;
}


with({}){};


let expect_lege = test_lege(-0.0);
let expect_legt = test_legt(-0.0);
let expect_ltgt = test_ltgt(-0.0);
let expect_ltge = test_ltge(-0.0);
while (!(inIon_lege && inIon_legt && inIon_ltgt && inIon_ltge)) {
  print(test_lege(-0.0), expect_lege);
  print(test_legt(-0.0), expect_legt);
  print(test_ltgt(-0.0), expect_ltgt);
  print(test_ltge(-0.0), expect_ltge);
}
