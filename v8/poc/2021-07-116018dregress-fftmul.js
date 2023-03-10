



function regress_1227752(power) {
  let a = 2n ** power;
  let a_squared = a * a;
  let expected = 2n ** (2n * power);
  print(expected, a_squared);
}
regress_1227752(48016n);  
regress_1227752(95960n);  
