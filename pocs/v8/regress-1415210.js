function source() {
  return 1;
}

const options = {
  arguments: [
    {
      get value() { d8.terminate(); return "something" },
    }
  ],
  type: "function",
};
const v12 = new Worker(source, options);
