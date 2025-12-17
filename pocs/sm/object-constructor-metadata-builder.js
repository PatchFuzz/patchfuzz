let capture = [];

for (let i = 0; i <= 200; ++i) {
  if (i === 100) {
    enableTrackAllocations();
  }

  
  capture[i & 1] = new Object();

  
  let data = getAllocationMetadata(capture[i & 1]);
  print(data !== null, i >= 100);
}
