class clazz {
};
const obj = [{[clazz]: -430.85078006555455 }, {foo: 168}];
const expected = '[{"class clazz {\\n}":-430.85078006555455},{"foo":168}]';
print(expected, (JSON.stringify(JSON.parse(JSON.stringify(obj)))));
