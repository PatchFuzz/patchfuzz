





a=[];
for (var i=0; i<10; i++) {
  a[a.length] = a;
}
try {
  for (var i=0; i<26; i++) {
    a[a.length] = a.toString();
  }
} catch(exc1) {}
