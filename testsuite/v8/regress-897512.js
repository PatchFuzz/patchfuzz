




for (let i = 0; i < 100; i++) Array.prototype.unshift(3.14);


const o31 = [1.1];
o31[37] = 2.2;


const o51 = o31.concat(false);


o51[0] = undefined;

assertEquals(o51.length, 39);


o51.sort();

assertEquals(o51.length, 39);
