





{
with({x:0}) {
  WScript.Echo(x)
}
let x = 1
}


{
eval('with({x:0}) { WScript.Echo(x) }')
let x = 1
}


{
let f = function() {
  with({x:0}) {
    WScript.Echo(x)
  }
}
let x = 1
f()
}


{
try {
  with({}) {
    WScript.Echo(x)
  }
  let x = 1
} catch(e) {
  WScript.Echo(e)
}
}


{
try {
  eval('with({}) { WScript.Echo(x) }')
  let x = 1
} catch(e) {
  WScript.Echo(e)
}
}


{
with({x:0}) {
  let x = 1
  WScript.Echo(x)
}
}


{
try { 
  with({x:0}) {
    WScript.Echo(x)
    let x = 1
  }
} catch(e) {
  WScript.Echo(e)
}
}


with({x: 'x'})
{
    WScript.Echo(typeof x)
}
let x = 5