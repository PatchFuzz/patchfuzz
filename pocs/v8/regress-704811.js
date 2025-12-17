(({x = {} = {}}) => {})({});


let a0 = ({x = {} = {}}) => {};
a0({});






let called = false;
let global_side_assignment = undefined;
(({x = {myprop: global_side_assignment} = {myprop: 2115}}) => {
  print('myprop' in x);
  print(2115, x.myprop);
  called = true;
})({});
print(called);
print(2115, global_side_assignment);



called = false;
global_side_assignment = undefined;
(({x = {myprop: global_side_assignment} = {myprop: 2115}}) => {
  print(3000, x);
  called = true;
})({x: 3000});
print(called);

print(undefined, global_side_assignment);



called = false;
global_side_assignment = undefined;
let a1 = ({x = {myprop: global_side_assignment} = {myprop: 2115}}) => {
  print('myprop' in x);
  print(2115, x.myprop);
  called = true;
}
a1({});
print(called);
print(2115, global_side_assignment);

called = false;
global_side_assignment = undefined;
let a2 = ({x = {myprop: global_side_assignment} = {myprop: 2115}}) => {
  print(3000, x);
  called = true;
}
a2({x: 3000});
print(called);
print(undefined, global_side_assignment);



called = false;
global_side_assignment = undefined;
function f1({x = {myprop: global_side_assignment} = {myprop: 2115}}) {
  print('myprop' in x);
  print(2115, x.myprop);
  print(2115, global_side_assignment);
  called = true;
}
f1({});
print(called);
print(2115, global_side_assignment);

called = false;
global_side_assignment = undefined;
function f2({x = {myprop: global_side_assignment} = {myprop: 2115}}) {
  print(3000, x);
  called = true;
}
f2({x: 3000});
print(called);
print(undefined, global_side_assignment);
