{
  try {
    const d = new DisposableStack();
    d.adopt(1, {"\u3042": 10});
  } catch (err) {
    print(err instanceof TypeError, true);
    print(err.message.includes("\u3042"), true);
  }
}

{
  try {
    const d = new DisposableStack();
    d.defer({"\u3042": 10});
  } catch (err) {
    print(err instanceof TypeError, true);
    print(err.message.includes("\u3042"), true);
  }
}
