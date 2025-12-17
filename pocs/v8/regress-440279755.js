const json_part1 = '{":\\"foo":1}';
const json_part2 = '{"bar":"foo"}';
const json_input = '[' + json_part1 + ',' + json_part2 + ']';
const parsed = JSON.parse(json_input);
const obj = parsed[0];
let s = JSON.stringify(obj);
print('{":\\\"foo":1}', s);
