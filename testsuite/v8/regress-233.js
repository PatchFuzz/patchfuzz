






























function loop(s) {
  loop(s.replace(/\s/g, ""));
}
try {
  loop("No");
} catch(e) {
  
}
