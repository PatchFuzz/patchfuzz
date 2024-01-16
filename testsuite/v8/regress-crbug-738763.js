





let constant = { a: 1 };

function update_array(array) {
  array.x = constant;
  %HeapObjectVerify(array);
  array[0] = undefined;
  %HeapObjectVerify(array);
  return array;
}

let ar1 = [1];
let ar2 = [2];
let ar3 = [3];
gc();
gc();

update_array(ar1);
constant = update_array(ar2);
update_array(ar3);
