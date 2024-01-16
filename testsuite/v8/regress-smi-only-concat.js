































var fast_array = ['a', 'b'];
var array = fast_array.concat(fast_array);

assertTrue(%HasObjectElements(fast_array));
assertTrue(%HasObjectElements(array));
