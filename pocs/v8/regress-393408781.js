load("test/mjsunit/regress-393408781-2.js");

let slot = 405;     
slot = -1795162112; 

function slot_load() {
  return slot;
}


let value = bar("(" + slot_load.toString() + ")")();
print(-1795162112, value);
