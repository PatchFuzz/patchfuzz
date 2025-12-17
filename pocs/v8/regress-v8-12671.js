function no_parameters_and_non_lexical_arguments() {
  print(typeof arguments, 'object');
  var arguments;
}
no_parameters_and_non_lexical_arguments()





function destructuring_parameters_and_non_lexical_arguments([_]) {
  print(typeof arguments, 'object');
  var arguments;
}
destructuring_parameters_and_non_lexical_arguments([])





function rest_parameters_and_non_lexical_arguments(..._) {
  print(typeof arguments, 'object');
  var arguments;
}
rest_parameters_and_non_lexical_arguments()





function initializer_parameters_and_non_lexical_arguments(_ = 0) {
  print(typeof arguments, 'object');
  var arguments;
}
initializer_parameters_and_non_lexical_arguments()





function initializer_parameters_and_lexical_arguments(_ = 0) {
  return typeof arguments;
  let arguments;
}

print(initializer_parameters_and_lexical_arguments);





function simple_parameters_and_lexical_arguments(_) {
  return typeof arguments;
  let arguments;
}

print(simple_parameters_and_lexical_arguments);
