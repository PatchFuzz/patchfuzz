let i = 0;

function main() {
  if (i++ > 2) return;
  Array.prototype.sort.call(main, ()=>{})()++; 
	Array.prototype.sort.call(main, ()=>{});
}

try { main(); }
catch {}

print('PASSED');
