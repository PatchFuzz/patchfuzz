



function f() {
  typeof boom;
  boom;
}

assertThrows(()=>f());
