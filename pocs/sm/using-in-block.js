;

const disposedInBlock = [];
{
  using a = { [Symbol.dispose]: () => disposedInBlock.push("a") };
  using b = { [Symbol.dispose]: () => disposedInBlock.push("b") };
}
print(disposedInBlock, ["b", "a"]);
