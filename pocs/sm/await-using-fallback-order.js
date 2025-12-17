;

const order = [];
async function testDisposeExtractionOrder() {
  await using x = {
      get [Symbol.asyncDispose]() {
        order.push('Symbol.asyncDispose');
        return undefined;
      },
      get [Symbol.dispose]() {
          order.push('Symbol.dispose');
          return function() { };
      }
  };
}

testDisposeExtractionOrder();
drainJobQueue();
print(order, ['Symbol.asyncDispose', 'Symbol.dispose']);
