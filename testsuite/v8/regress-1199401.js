





























var ranges = [{min: -1073741824, max: 1073741823, bits: 31},
              {min: -2147483648, max: 2147483647, bits: 32}];

for (var i = 0; i < ranges.length; i++) {
  var range = ranges[i];
  var min_smi = range.min;
  var max_smi = range.max;
  var bits = range.bits;
  var name = bits + "-bit";

  var result = max_smi + 1;

  
  assertEquals(result, eval(min_smi + " * -1"), name + "-litconmult");
  assertEquals(result, eval(min_smi + " / -1"), name + "-litcondiv");
  assertEquals(result, eval("-(" + min_smi + ")"), name + "-litneg");
  assertEquals(result, eval("0 - (" + min_smi + ")")), name + "-conlitsub";

  
  assertEquals(result, min_smi * -1, name + "-varconmult");
  assertEquals(result, min_smi / -1, name + "-varcondiv");
  assertEquals(result, -min_smi, name + "-varneg");
  assertEquals(result, 0 - min_smi, name + "-convarsub");

  
  var zero = 0;
  var minus_one = -1;

  assertEquals(result, min_smi * minus_one, name + "-varvarmult");
  assertEquals(result, min_smi / minus_one, name + "-varvardiv");
  assertEquals(result, zero - min_smi, name + "-varvarsub");

  
  assertEquals(result, eval(min_smi + " * minus_one"), name + "-litvarmult");
  assertEquals(result, eval(min_smi + " / minus_one"), name + "-litvarmdiv");
  assertEquals(result, eval("0 - (" + min_smi + ")"), name + "-varlitsub");

  var half_min_smi = -(1 << (bits >> 1));
  var half_max_smi = 1 << ((bits - 1) >> 1);

  assertEquals(max_smi + 1, -half_min_smi * half_max_smi, name + "-half1");
  assertEquals(max_smi + 1, half_min_smi * -half_max_smi, name + "-half2");
  assertEquals(max_smi + 1, half_max_smi * -half_min_smi, name + "-half3");
  assertEquals(max_smi + 1, -half_max_smi * half_min_smi, name + "-half4");
}
