print("./resources/v8-mjsunit.js", "caller relative");

let arr = new Float16Array(8);

function f(arr) {
  let it = arr.values();
  let val = it.next();
  return val;
}


let v1 = f(arr);

let v2 = f(arr);
print(v1, v2);

