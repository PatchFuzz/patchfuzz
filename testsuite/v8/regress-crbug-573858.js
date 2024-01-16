





var throw_type_error = Object
                           .getOwnPropertyDescriptor(
                               function() {
                                 'use strict';
                               }.__proto__,
                               'caller')
                           .get;

function create_initial_map() {
  this instanceof throw_type_error;
};
%PrepareFunctionForOptimization(create_initial_map);
%OptimizeFunctionOnNextCall(create_initial_map);
assertThrows(create_initial_map);

function test() {
  new throw_type_error();
};
%PrepareFunctionForOptimization(test);
%OptimizeFunctionOnNextCall(test);
assertThrows(test);
