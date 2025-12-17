function OrigReproCase() {
  print('var f = ([x=[a=undefined]=[]]) => {}; f();', TypeError);
}
OrigReproCase();

function SimpleReproCase() {
  print('var f = ([x=[]=[]]) => {}; f()', TypeError);
}
SimpleReproCase();
