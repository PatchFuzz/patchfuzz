let obj = { 'abcdefghijklmnopqrst': 'asdf' };
let consstring_key = 'abcdefghijklmnopqrstuvwxyz'.substring(0,20);

print(obj.hasOwnProperty(consstring_key));
