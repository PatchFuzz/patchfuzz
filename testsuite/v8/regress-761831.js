



function OrigReproCase() {
  assertThrows('var f = ([x=[a=undefined]=[]]) => {}; f();', TypeError);
}
OrigReproCase();

function SimpleReproCase() {
  assertThrows('var f = ([x=[]=[]]) => {}; f()', TypeError);
}
SimpleReproCase();
