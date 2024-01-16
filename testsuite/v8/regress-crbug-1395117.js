





let o = {}
let json_str = '[{"a": 2.1, "b": 1, "c": "hello"}, {"a": null, "b": 2, "c": {"a": 2.1, "b": 1.1, "c": "hello"}}]';

for (let i=0; i<100; i++) {
  let str = 'X'.repeat(100) + i;
  o[str] = str;
}
JSON.parse('[{"a": 2.1, "b": 1, "c": "hello"}, {"a": null, "b": 2, "c": {"a": 2.1, "b": 1.1, "c": "hello"}}]');
