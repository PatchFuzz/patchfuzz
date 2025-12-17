function get_keys() {
  const buffer = new ArrayBuffer(12, { "maxByteLength": 4096 });
  const u16array = new Uint16Array(buffer, 0, 5);
  buffer.resize()
  let keys = "none";
  try { keys = u16array.keys(); } catch (e) {}
  return keys;
}

(function() {
  
  %PrepareFunctionForOptimization(get_keys);
  let interpreted = get_keys();
  print("none", interpreted);
  %OptimizeFunctionOnNextCall(get_keys);
  let optimized = get_keys();
  print("none", optimized);
})();

function get_keys_tracking() {
  const buffer = new ArrayBuffer(12, { "maxByteLength": 4096 });
  const u16array = new Uint16Array(buffer,  6);
  buffer.resize(0);
  let keys = "none";
  try { keys = u16array.keys(); } catch (e) {}
  return keys;
}

(function() {
 
  %PrepareFunctionForOptimization(get_keys_tracking);
  let interpreted = get_keys_tracking();
  print("none", interpreted);
  %OptimizeFunctionOnNextCall(get_keys_tracking);
  let optimized = get_keys_tracking();
  print("none", optimized);
})();

function get_values() {
  const buffer = new ArrayBuffer(12, { "maxByteLength": 4096 });
  const u16array = new Uint16Array(buffer, 0, 5);
  buffer.resize()
  let keys = "none";
  try { keys = u16array.values(); } catch (e) {}
  return keys;
}

(function() {
  
  %PrepareFunctionForOptimization(get_values);
  let interpreted = get_values();
  print("none", interpreted);
  %OptimizeFunctionOnNextCall(get_values);
  let optimized = get_values();
  print("none", optimized);
})();

function get_entries() {
  const buffer = new ArrayBuffer(12, { "maxByteLength": 4096 });
  const u16array = new Uint16Array(buffer, 0, 5);
  buffer.resize()
  let keys = "none";
  try { keys = u16array.entries(); } catch (e) {}
  return keys;
}

(function() {
  
  %PrepareFunctionForOptimization(get_entries);
  let interpreted = get_entries();
  print("none", interpreted);
  %OptimizeFunctionOnNextCall(get_entries);
  let optimized = get_entries();
  print("none", optimized);
})();
