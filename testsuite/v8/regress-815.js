

































var o = new Object();



for (x in +o) { }


for (a[+o] in o) {}


try {
  o[+o](1,2,3)
} catch(e) {
  
}
