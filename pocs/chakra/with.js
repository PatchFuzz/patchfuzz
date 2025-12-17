{
with({x:0}) {
  print(x)
}
let x = 1
}


{
eval('with({x:0}) { print(x) }')
let x = 1
}


{
let f = function() {
  with({x:0}) {
    print(x)
  }
}
let x = 1
f()
}


{
try {
  with({}) {
    print(x)
  }
  let x = 1
} catch(e) {
  print(e)
}
}


{
try {
  eval('with({}) { print(x) }')
  let x = 1
} catch(e) {
  print(e)
}
}


{
with({x:0}) {
  let x = 1
  print(x)
}
}


{
try { 
  with({x:0}) {
    print(x)
    let x = 1
  }
} catch(e) {
  print(e)
}
}


with({x: 'x'})
{
    print(typeof x)
}
let x = 5