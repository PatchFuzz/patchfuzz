














var fast_array = [];
for (var i = 0; i < 1000; i++) {
    fast_array.push(i);
}

var result_array = fast_array.slice(0, {valueOf: function() { fast_array.length = '3'; return 1000; }});

print(result_array.length === 1000);

print(result_array[0] === 0);
print(result_array[1] === 1);
print(result_array[2] === 2);

for (var i = 3; i < 1000; i++) {
  print(typeof(result_array[i]) === "undefined");
}
