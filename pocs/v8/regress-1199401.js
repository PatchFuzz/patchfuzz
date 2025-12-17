var ranges = [{min: -1073741824, max: 1073741823, bits: 31},
              {min: -2147483648, max: 2147483647, bits: 32}];

for (var i = 0; i < ranges.length; i++) {
  var range = ranges[i];
  var min_smi = range.min;
  var max_smi = range.max;
  var bits = range.bits;
  var name = bits + "-bit";

  var result = max_smi + 1;

  
  print(result, eval(min_smi + " * -1"), name + "-litconmult");
  print(result, eval(min_smi + " / -1"), name + "-litcondiv");
  print(result, eval("-(" + min_smi + ")"), name + "-litneg");
  print(result, eval("0 - (" + min_smi + ")")), name + "-conlitsub";

  
  print(result, min_smi * -1, name + "-varconmult");
  print(result, min_smi / -1, name + "-varcondiv");
  print(result, -min_smi, name + "-varneg");
  print(result, 0 - min_smi, name + "-convarsub");

  
  var zero = 0;
  var minus_one = -1;

  print(result, min_smi * minus_one, name + "-varvarmult");
  print(result, min_smi / minus_one, name + "-varvardiv");
  print(result, zero - min_smi, name + "-varvarsub");

  
  print(result, eval(min_smi + " * minus_one"), name + "-litvarmult");
  print(result, eval(min_smi + " / minus_one"), name + "-litvarmdiv");
  print(result, eval("0 - (" + min_smi + ")"), name + "-varlitsub");

  var half_min_smi = -(1 << (bits >> 1));
  var half_max_smi = 1 << ((bits - 1) >> 1);

  print(max_smi + 1, -half_min_smi * half_max_smi, name + "-half1");
  print(max_smi + 1, half_min_smi * -half_max_smi, name + "-half2");
  print(max_smi + 1, half_max_smi * -half_min_smi, name + "-half3");
  print(max_smi + 1, -half_max_smi * half_min_smi, name + "-half4");
}
