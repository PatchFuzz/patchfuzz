



let obj = { 'abcdefghijklmnopqrst': 'asdf' };
let consstring_key = 'abcdefghijklmnopqrstuvwxyz'.substring(0,20);

assertTrue(obj.hasOwnProperty(consstring_key));
