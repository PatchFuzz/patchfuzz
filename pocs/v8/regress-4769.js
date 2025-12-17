Object.getPrototypeOf([])[Symbol.iterator] = () => print();

JSON.stringify({foo: [42]});
JSON.stringify({foo: [42]}, []);
JSON.stringify({foo: [42]}, undefined, ' ');
JSON.stringify({foo: [42]}, [], ' ');
